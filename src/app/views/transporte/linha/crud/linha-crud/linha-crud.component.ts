
import { Component, OnInit } from '@angular/core';
import { Linha } from 'src/app/entities/linha';
import { LinhaService } from 'src/app/services/linha-service';
import { Response } from 'src/app/services/response';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-linha-crud',
  templateUrl: './linha-crud.component.html',
  styleUrls: ['./linha-crud.component.css'],

})
export class LinhaCrudComponent implements OnInit {
 

  tipos: SelectItem[];
 

  displayDialog: boolean;
  linha: Linha;
  selectedLinha: Linha;
  newLinha: boolean;
  linhas: Linha[];
  cols: any[];


  constructor(private linhaService: LinhaService) {


    this.tipos = [
      {label: 'Rodoviária municipal', value: 'Rodoviária municipal'},
      {label: 'Rodoviária intermunicipal', value: 'Rodoviária intermunicipal'},
      {label: 'Rodoviária interestadual', value: 'Rodoviária interestadual'},
      {label: 'Urbana', value: 'Urbana'}

  ];
   }

  ngOnInit() {
   
   
    this.linhaService.list().subscribe(linhas => this.linhas = linhas);
    this.cols = [
      { field: 'prefixo', header: 'Prefixo/Código' },
      { field: 'nome', header: 'Nome' },
      { field: 'tipo', header: 'Tipo' }
      
    ];
  }

  showDialogToAdd() {
    this.newLinha = true;  
    this.linha = new Linha();  
    this.linha.prefixo ="";
    this.linha.nome ="";
    this.linha.tipo ="";
    this.linha.tarifa =0;
    this.linha.outros_valores =0;
    this.linha.nr_registro ="";
    this.linha.informacoes ="";

    
    this.displayDialog = true;
  }

  save() {
     if (this.linha.prefixo==""){
       alert("Informar prefixo/codigo");
       return;
     }
     else if (this.linha.tipo==""){
       alert("Informar tipo da linha");
       return;      
     } 
     else if (this.linha.nome==""){
      alert("Informar nome da linha");
      return;      
    } 


    let linhas = [...this.linhas];
  
    if (this.newLinha){
      linhas.push(this.linha);
       /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVo linha */
      
       this.linhaService.createOrUpdate(this.linha).subscribe(response => {

        let res: Response = <Response>response;

        if (res.codigo == 1) {
          //alert(res.mensagem);
          this.linha = new Linha();
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
      linhas[this.linhas.indexOf(this.selectedLinha)] = this.linha;
      this.linhaService.createOrUpdate(this.linha).subscribe(response => {
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
    this.linhas = linhas;
    this.linha = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.linhas.indexOf(this.selectedLinha);  
    
    if(confirm("Deseja realmente excluir esse registro?")){
      this.linhaService.delete(this.selectedLinha.id).subscribe(response => {
            let res:Response = <Response>response;
            if(res.codigo == 1){
              alert(res.mensagem);
              this.linhas.splice(index,1);
            }
            else{             
              alert(res.mensagem);
            }
        },
        (erro) => {  
             alert(erro);
        });        
    }
    this.linhas = this.linhas.filter((val, i) => i != index);
    this.linha = null;
    this.displayDialog = false;
  }


  onRowSelect(event) {
    this.newLinha = false;
    this.linha = this.cloneLinha(event.data);
    this.displayDialog = true;
  }

  cloneLinha(e: Linha): Linha {
    let linha = new Linha();
    for (let prop in e) {
      linha[prop] = e[prop];
    }
    return linha;
  }


}
