import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/entities/cidade';
import { CidadeService } from 'src/app/services/cidade-service';
import { Response } from 'src/app/services/response';
import { Estado } from 'src/app/entities/estado';
import { EstadoService } from 'src/app/services/estado-service';

import {DialogService} from 'primeng/api';
import { EstadoListComponent } from 'src/app/views/estado/estado-list/estado-list.component';



@Component({
  selector: 'app-cidade-crud',
  templateUrl: './cidade-crud.component.html',
  styleUrls: ['./cidade-crud.component.css'],
  providers: [DialogService]
})
export class CidadeCrudComponent implements OnInit {displayDialog: boolean;
  cidade: Cidade; 
  selectedCidade: Cidade;
  selectedEstado: Estado;
  newCidade: boolean;
  cidades: Cidade[];
  estados: Estado[];
  cols: any[];


  constructor(private cidadeService: CidadeService, private estadoService: EstadoService, public dialogService: DialogService) { }

  ngOnInit() {
    this.cidadeService.list().subscribe(cidades => this.cidades = cidades);
    this.cols = [      
      { field: 'codigo_ibge', header: 'Código IBGE' },
      { field: 'nome', header: 'Nome' },
      { field: 'estado_id', header: 'estado' }
    ];


    this.estadoService.list().subscribe(estados => this.estados = estados);
    
  }

  showDialogToAdd() {
    this.newCidade = true;  
    this.cidade = new Cidade();
    this.displayDialog = true;
  }

  save() {
    let cidades = [...this.cidades];
    if (this.newCidade){
      cidades.push(this.cidade);
       /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVo cidade */
       this.cidadeService.createOrUpdate(this.cidade).subscribe(response => {

        let res: Response = <Response>response;

        if (res.codigo == 1) {
          //alert(res.mensagem);
          this.cidade = new Cidade();
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
      cidades[this.cidades.indexOf(this.selectedCidade)] = this.cidade;
      this.cidadeService.createOrUpdate(this.cidade).subscribe(response => {
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
    this.cidades = cidades;
    this.cidade = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.cidades.indexOf(this.selectedCidade);  
    
    if(confirm("Deseja realmente excluir esse registro?")){
      this.cidadeService.delete(this.selectedCidade.id).subscribe(response => {
            let res:Response = <Response>response;
            if(res.codigo == 1){
              alert(res.mensagem);
              this.cidades.splice(index,1);
            }
            else{             
              alert(res.mensagem);
            }
        },
        (erro) => {  
             alert(erro);
        });        
    }
    this.cidades = this.cidades.filter((val, i) => i != index);
    this.cidade = null;
    this.displayDialog = false;
  }


  onRowSelect(event) {
    this.newCidade = false;
    this.cidade = this.cloneCidade(event.data);
    this.displayDialog = true;
  }

  cloneCidade(e: Cidade): Cidade {
    let cidade = new Cidade();
    for (let prop in e) {
      cidade[prop] = e[prop];
    }
    return cidade;
  }




  show() {
    const ref = this.dialogService.open(EstadoListComponent, {
        header: 'Escolha um estado',
        width: '70%',
      //contentStyle: {"max-height": "350px", "overflow": "auto"}
       contentStyle: {"overflow": "auto"}
    });

    ref.onClose.subscribe((estado: Estado) =>{
        if (estado) {
             this.cidade.estado_id = estado;
        }
    });
  }

}
