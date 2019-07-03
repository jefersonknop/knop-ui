import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/entities/estado';
import { EstadoService } from 'src/app/services/estado-service';
import { Response } from 'src/app/services/response';

@Component({
  selector: 'app-estado-crud',
  templateUrl: './estado-crud.component.html',
  styleUrls: ['./estado-crud.component.css']
})
export class EstadoCrudComponent implements OnInit {
  displayDialog: boolean;
  estado: Estado; 
  selectedEstado: Estado;
  newEstado: boolean;
  estados: Estado[];
  cols: any[];


  constructor(private estadoService: EstadoService) { }

  ngOnInit() {
    this.estadoService.list().subscribe(estados => this.estados = estados);
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'sigla', header: 'Sigla' }
    ];
  }

  showDialogToAdd() {
    this.newEstado = true;  
    this.estado = new Estado();
    this.displayDialog = true;
  }

  save() {
    let estados = [...this.estados];
    if (this.newEstado){
      estados.push(this.estado);
       /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVo estado */
       this.estadoService.createOrUpdate(this.estado).subscribe(response => {

        let res: Response = <Response>response;

        if (res.codigo == 1) {
          //alert(res.mensagem);
          this.estado = new Estado();
        }
        else {         
          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });

    }
    else{
      estados[this.estados.indexOf(this.selectedEstado)] = this.estado;
      this.estadoService.createOrUpdate(this.estado).subscribe(response => {
        let res: Response = <Response>response;

        if (res.codigo == 1) {
         // alert(res.mensagem);
         // this.router.navigate(['/consulta-pessoa']);
        }
        else {
          alert(res.mensagem);
        }
      },
        (erro) => {                           
          alert(erro);
        });
       
    }
    this.estados = estados;
    this.estado = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.estados.indexOf(this.selectedEstado);  
    
    if(confirm("Deseja realmente excluir esse registro?")){
      this.estadoService.delete(this.selectedEstado.id).subscribe(response => {
            let res:Response = <Response>response;
            if(res.codigo == 1){
              alert(res.mensagem);
              this.estados.splice(index,1);
            }
            else{             
              alert(res.mensagem);
            }
        },
        (erro) => {  
             alert(erro);
        });        
    }
    this.estados = this.estados.filter((val, i) => i != index);
    this.estado = null;
    this.displayDialog = false;
  }


  onRowSelect(event) {
    this.newEstado = false;
    this.estado = this.cloneEstado(event.data);
    this.displayDialog = true;
  }

  cloneEstado(e: Estado): Estado {
    let estado = new Estado();
    for (let prop in e) {
      estado[prop] = e[prop];
    }
    return estado;
  }




    onTabChange(event) {
       // this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }


}
