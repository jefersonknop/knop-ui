import { Component, OnInit } from '@angular/core';
import { Localidade } from 'src/app/entities/localidade';
import { LocalidadeService } from 'src/app/services/localidade-service';
import { SelectItem, DialogService } from 'primeng/api';
import { Response } from 'src/app/services/response';
import { CidadeService } from 'src/app/services/cidade-service';
import { Cidade } from 'src/app/entities/cidade';
import { CidadeListComponent } from 'src/app/views/cidade/cidade-list/cidade-list.component';
import { Estado } from 'src/app/entities/estado';


@Component({
  selector: 'app-localidade-crud',
  templateUrl: './localidade-crud.component.html',
  styleUrls: ['./localidade-crud.component.css'],
  providers: [DialogService]
})
export class LocalidadeCrudComponent implements OnInit {

  cidade: Cidade; 
  selectedCidade: Cidade;
  cidades: Cidade[];


  tipos: SelectItem[];
 

  displayDialog: boolean;
  localidade: Localidade;
  selectedLocalidade: Localidade;
  newLocalidade: boolean;
  localidades: Localidade[];
  cols: any[];


  constructor(private localidadeService: LocalidadeService, private cidadeService: CidadeService, public dialogService: DialogService) {
      

    this.tipos = [
      {label: 'Bairro', value: 'Bairro'},
      {label: 'Localidade', value: 'Localidade'},
      {label: 'Cidade', value: 'Cidade'},
      {label: 'Outros', value: 'Outros'}

  ];
   }

  ngOnInit() {
   
   
    this.localidadeService.list().subscribe(localidades => this.localidades = localidades);
    this.cols = [
      { field: 'nome', header: 'Localidade/Bairro' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'cidade_id', header: 'Cidade' },
      { field: 'cidade_id.estado_id.nome', header: 'Estado' }
      
    ];


    
    
  }

  showDialogToAdd() {
    this.newLocalidade = true;  
    this.localidade = new Localidade();    
    this.localidade.nome ="";
    this.localidade.tipo ="";
    this.localidade.cidade_id = new Cidade();
    this.localidade.cidade_id.estado_id = new Estado();
    this.localidade.informacoes ="";

    
    this.displayDialog = true;
  }

  save() {
     if (this.localidade.nome==""){
       alert("Informar nome da localidade");
       return;
     }
     else if (this.localidade.tipo==""){
       alert("Informar tipo");
       return;      
     } 
  


    let localidades = [...this.localidades];
  
    if (this.newLocalidade){
      localidades.push(this.localidade);
       /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVo localidade */
      // this.localidade.inquilino_id = SharedService.getInstance().usuario.inquilino_id; 



       this.localidadeService.createOrUpdate(this.localidade).subscribe(response => {

        let res: Response = <Response>response;

        if (res.codigo == 1) {
          //alert(res.mensagem);
          this.localidade = new Localidade();
           //prepara novo cadastro
          this.newLocalidade = true;
          this.localidade = this.cloneLocalidade(this.localidade);
          this.localidade.nome ="";

        }
        else {         
          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });


        this.newLocalidade = true;
        this.displayDialog = true;

    }
    else{
      localidades[this.localidades.indexOf(this.selectedLocalidade)] = this.localidade;
      this.localidadeService.createOrUpdate(this.localidade).subscribe(response => {
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
      this.localidade = null;
      this.displayDialog = false;
    }
    this.localidades = localidades;
  
  }

  delete() {
    let index = this.localidades.indexOf(this.selectedLocalidade);  
    
    if(confirm("Deseja realmente excluir esse registro?")){
      this.localidadeService.delete(this.selectedLocalidade.id).subscribe(response => {
            let res:Response = <Response>response;
            if(res.codigo == 1){
              alert(res.mensagem);
              this.localidades.splice(index,1);
            }
            else{             
              alert(res.mensagem);
            }
        },
        (erro) => {  
             alert(erro);
        });        
    }
   // this.localidades = this.localidades.filter((val, i) => i != index);
    this.localidade = null;
    this.displayDialog = false;
  }


  onRowSelect(event) {
    this.newLocalidade = false;
    this.localidade = this.cloneLocalidade(event.data);
    this.displayDialog = true;
  }

  cloneLocalidade(e: Localidade): Localidade {
    let localidade = new Localidade();
    for (let prop in e) {
      localidade[prop] = e[prop];
    }
    return localidade;
  }



  show() {
    const ref = this.dialogService.open(CidadeListComponent, {
        header: 'Escolha uma cidade',
        width: '70%',
      //contentStyle: {"max-height": "350px", "overflow": "auto"}
       contentStyle: {"overflow": "auto"}
    });

    ref.onClose.subscribe((cidade: Cidade) =>{
        if (cidade) {
             this.localidade.cidade_id = cidade;
        }
    });
  }


}

