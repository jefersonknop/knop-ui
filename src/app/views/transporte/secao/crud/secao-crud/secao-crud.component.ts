import { Localidade } from './../../../../../entities/localidade';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { Linha } from 'src/app/entities/linha';
import { Secao } from 'src/app/entities/secao';
import { LinhaService } from 'src/app/services/linha-service';
import { SecaoService } from 'src/app/services/secao-service';
import { Response } from 'src/app/services/response';
import { LinhaListComponent } from '../../../linha/crud/linha-list/linha-list.component';
import { LocalidadeListComponent } from '../../../localidade/crud/localidade-list/localidade-list.component';

@Component({
  selector: 'app-secao-crud',
  templateUrl: './secao-crud.component.html',
  styleUrls: ['./secao-crud.component.css'],
  providers: [DialogService]

})
export class SecaoCrudComponent implements OnInit {
  linha: Linha; 
  selectedLinha: Linha;
  linhas: Linha[];                     


  displayDialog: boolean;
  secao: Secao;
  selectedSecao: Secao;
  newSecao: boolean;
  secoes: Secao[];
  cols: any[];

  //str_tarifa: string;




  constructor(private secaoService: SecaoService, private linhaService: LinhaService, public dialogService: DialogService) {
   }

  ngOnInit() {
   
   
    this.secaoService.list().subscribe(secoes => this.secoes = secoes);
    this.cols = [
      { field: 'linha_id.nome', header: 'Linha' },
      { field: 'localidade1_id.nome', header: 'Destino' },
      { field: 'localidade2_id.nome', header: 'Origem' },
      { field: 'tarifa', header: 'Tarifa (R$)' }
      
    ];


    this.linhaService.list().subscribe(linhas => this.linhas = linhas);
  }

  showDialogToAdd() {
    this.newSecao = true;  
    this.secao = new Secao();    
    this.secao.linha_id = new Linha();
    this.secao.localidade1_id = new Localidade();
    this.secao.localidade2_id = new Localidade();
    this.secao.descricao =" ";
    this.secao.tipo ="";
    this.secao.principal = false;
    this.secao.tarifa = 0.0;
    this.secao.outros_valores = 0.0;
    this.secao.informacoes ="";

    //this.str_tarifa = "0,00";
    
    this.displayDialog = true;
  }

  save() {
     if (this.secao.linha_id==null || this.secao.linha_id.nome== null ){
       alert("Informar linha");
       return;
     }
     else if (this.secao.localidade1_id ==null || this.secao.localidade1_id.nome == null){
       alert("Informar localidade de origem");
       return;      
     } 
     else if (this.secao.localidade2_id ==null || this.secao.localidade2_id.nome == null){
      alert("Informar localidade de destino");
      return;      
    } 



     this.secao.descricao =this.secao.localidade1_id.nome + " - " + this.secao.localidade2_id.nome;

    // try{       
        //this.secao.tarifa = parseFloat(this.str_tarifa.replace(",", "."));
    // }
    //catch(Error){
     //   alert(Error.message);
      //  return;    
    //}
     
   
    
    let secoes = [...this.secoes];
  
    if (this.newSecao){
      secoes.push(this.secao);
       /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVo secao */
      // this.secao.inquilino_id = SharedService.getInstance().usuario.inquilino_id; 



       this.secaoService.createOrUpdate(this.secao).subscribe(response => {

        let res: Response = <Response>response;

        if (res.codigo == 1) {
          //alert(res.mensagem);
          this.secao = new Secao();
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
      secoes[this.secoes.indexOf(this.selectedSecao)] = this.secao;
      this.secaoService.createOrUpdate(this.secao).subscribe(response => {
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
    this.secoes = secoes;
    this.secao = null;
   // this.str_tarifa = "";
    this.displayDialog = false;
  }

  delete() {
    let index = this.secoes.indexOf(this.selectedSecao);  
    
    if(confirm("Deseja realmente excluir esse registro?")){
      this.secaoService.delete(this.selectedSecao.id).subscribe(response => {
            let res:Response = <Response>response;
            if(res.codigo == 1){
              alert(res.mensagem);
              this.secoes.splice(index,1);
            }
            else{             
              alert(res.mensagem);
            }
        },
        (erro) => {  
             alert(erro);
        });        
    }
    this.secoes = this.secoes.filter((val, i) => i != index);
    this.secao = null;
   // this.str_tarifa = "";
    this.displayDialog = false;
  }


  onRowSelect(event) {
    this.newSecao = false;
    this.secao = this.cloneLocalidade(event.data);
    this.displayDialog = true;
  }

  cloneLocalidade(e: Secao): Secao {
    let secao = new Secao();
    for (let prop in e) {
      secao[prop] = e[prop];
    }
    return secao;
  }



  showLinha() {
    const ref = this.dialogService.open(LinhaListComponent, {
        header: 'Escolha uma linha',
        width: '70%',
      //contentStyle: {"max-height": "350px", "overflow": "auto"}
       contentStyle: {"overflow": "auto"}
    });

    ref.onClose.subscribe((linha: Linha) =>{
        if (linha) {
             this.secao.linha_id = linha;
        }
    });
  }

  showLocalidade1() {
    const ref = this.dialogService.open(LocalidadeListComponent, {
        header: 'Escolha a localideade de origem',
        width: '70%',
      //contentStyle: {"max-height": "350px", "overflow": "auto"}
       contentStyle: {"overflow": "auto"}
    });

    ref.onClose.subscribe((localidade: Localidade) =>{
        if (localidade) {
             this.secao.localidade1_id = localidade;
        }
    });
  }


  showLocalidade2() {
    const ref = this.dialogService.open(LocalidadeListComponent, {
        header: 'Escolha a localideade de destino',
        width: '70%',
      //contentStyle: {"max-height": "350px", "overflow": "auto"}
       contentStyle: {"overflow": "auto"}
    });

    ref.onClose.subscribe((localidade: Localidade) =>{
        if (localidade) {
             this.secao.localidade2_id = localidade;
        }
    });
  }



}
