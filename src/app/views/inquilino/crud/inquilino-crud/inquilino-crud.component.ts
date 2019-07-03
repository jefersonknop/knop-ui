import { Component, OnInit } from '@angular/core';
import { Inquilino } from 'src/app/entities/inquilino';
import { Cidade } from 'src/app/entities/cidade';
import { InquilinoService } from 'src/app/services/inquilino-service';
import { CidadeService } from 'src/app/services/cidade-service';
import { DialogService } from 'primeng/api';
import { Response } from 'src/app/services/response';
import { CidadeListComponent } from 'src/app/views/cidade/cidade-list/cidade-list.component';

@Component({
  selector: 'app-inquilino-crud',
  templateUrl: './inquilino-crud.component.html',
  styleUrls: ['./inquilino-crud.component.css'],
  providers: [DialogService]
})
export class InquilinoCrudComponent implements OnInit {displayDialog: boolean;
  inquilino: Inquilino; 
  selectedInquilino: Inquilino;
  selectedCidade: Cidade;
  newInquilino: boolean;
  inquilinos: Inquilino[];
  cidades: Cidade[];
  cols: any[];


  constructor(private inquilinoService: InquilinoService, private cidadeService: CidadeService, public dialogService: DialogService) { }

  ngOnInit() {
    this.inquilinoService.list().subscribe(inquilinos => this.inquilinos = inquilinos);
    this.cols = [      
      { field: 'nome', header: 'Nome' },
      { field: 'cidade', header: 'Cidade/UF' },
      { field: 'email', header: 'Email' }
    ];


    this.cidadeService.list().subscribe(cidades => this.cidades = cidades);
    
  }

  showDialogToAdd() {
    this.newInquilino = true;  
    this.inquilino = new Inquilino();
    this.inquilino.cidade = new Cidade();
    this.displayDialog = true;
  }

  save() {
    let inquilinos = [...this.inquilinos];
    if (this.newInquilino){
      inquilinos.push(this.inquilino);
       /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVo inquilino */
       this.inquilinoService.createOrUpdate(this.inquilino).subscribe(response => {

        let res: Response = <Response>response;

        if (res.codigo == 1) {
          //alert(res.mensagem);
          this.inquilino = new Inquilino();
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
      inquilinos[this.inquilinos.indexOf(this.selectedInquilino)] = this.inquilino;
      this.inquilinoService.createOrUpdate(this.inquilino).subscribe(response => {
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
    this.inquilinos = inquilinos;
    this.inquilino = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.inquilinos.indexOf(this.selectedInquilino);  
    
    if(confirm("Deseja realmente excluir esse registro?")){
      this.inquilinoService.delete(this.selectedInquilino.id).subscribe(response => {
            let res:Response = <Response>response;
            if(res.codigo == 1){
              alert(res.mensagem);
              this.inquilinos.splice(index,1);
            }
            else{             
              alert(res.mensagem);
            }
        },
        (erro) => {  
             alert(erro);
        });        
    }
    this.inquilinos = this.inquilinos.filter((val, i) => i != index);
    this.inquilino = null;
    this.displayDialog = false;
  }


  onRowSelect(event) {
    this.newInquilino = false;
    this.inquilino = this.cloneInquilino(event.data);
    this.displayDialog = true;
  }

  cloneInquilino(e: Inquilino): Inquilino {
    let inquilino = new Inquilino();
    for (let prop in e) {
      inquilino[prop] = e[prop];
    }
    return inquilino;
  }




  show() {
    const ref = this.dialogService.open(CidadeListComponent, {
        header: 'Escolha um cidade',
        width: '70%',
      //contentStyle: {"max-height": "350px", "overflow": "auto"}
       contentStyle: {"overflow": "auto"}
    });

    ref.onClose.subscribe((cidade: Cidade) =>{
        if (cidade) {
             this.inquilino.cidade = cidade;
        }
    });
}

}

