import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { Secao } from 'src/app/entities/secao';
import { SecaoService } from 'src/app/services/secao-service';
import { SecaoListComponent } from '../../secao/crud/secao-list/secao-list.component';

@Component({
  selector: 'app-bilhete-passagem',
  templateUrl: './bilhete-passagem.component.html',
  styleUrls: ['./bilhete-passagem.component.css'],
  providers: [DialogService]

})
export class BilhetePassagemComponent implements OnInit {
  displayDialog: boolean;
  secao: Secao;
  selectedSecao: Secao; 
  secoes: Secao[];




  prefixo: string;
  linha: string;
  secao_de: string;
  secao_para: string;
  data_embarque: string;
  horario: string;
  poltrona: string;
  data_emissao: string;
  hora_emissao: string;
  tarifa: string;
  total: string;
  
  pt: any;


  constructor (private secaoService: SecaoService,  public dialogService: DialogService) {
  }

  ngOnInit() {


    
  
   
  }


  imprimir(){
  
    //Imprimir	
    //novo
    var win = window.open();
    //Para imprimir na página	
    win.document.write('<html>');
    win.document.write('<head>');
    win.document.write('<title>Imprimir</title>');
    win.document.write('<style type="text/css">@page{size:portrait;margin:0;}.corpo{margin-top:100px;margin-left:45px;font-size:8px;}p{margin:0;}</style>');
    win.document.write('</head>');
    win.document.write('<body>');	
    
    win.document.write('<div class="corpo">'); 


   

     //linha 1***********************************
    win.document.write('<table border="0" width="100%" height="70px">');  
    win.document.write('<tr>');
   
    win.document.write('<td width="25%">');   
    win.document.write(this.prefixo);
    win.document.write('</td>');  
 
    win.document.write('<td width="75%">');   
    win.document.write(this.secao_de + " - " + this.secao_para);    
    win.document.write('</td>');     
  
    
    win.document.write('</tr>');  
    
    win.document.write('</table>');  
  


    //linha 2***********************************
    win.document.write('<br>');  
    win.document.write('<table border="0" height="35px">');   
    win.document.write('<tr>');
   
    
    win.document.write('<td width="50%">');   
   // win.document.write(this.data_embarque + "&nbsp" + this.horario+ "&nbsp;&nbsp;&nbsp;&nbsp;"+ this.poltrona);
    win.document.write('</td>');   

    
     win.document.write('</tr>');
     win.document.write('</table');


     //linha 3***********************************
     win.document.write('<br>');
     win.document.write('<table border="0" height="30px">');  
    win.document.write('<tr>');


    win.document.write('<td width="35%">');   
    win.document.write(this.data_emissao+"-"+this.hora_emissao);
    win.document.write('</td>');      
  
     win.document.write('</tr>');       
     win.document.write('</table');


   //linha 4***********************************
   win.document.write('<br>');  
   win.document.write('<table border="0" width="100%" height="50px">');  
    win.document.write('<tr>');
   
      //coluna 1
      win.document.write('<td width="20%">');   
      win.document.write('</td>');    
  
     //coluna 2
    win.document.write('<td>');  
    win.document.write("R$ "+ this.tarifa);
    win.document.write('</td>');    
     

    win.document.write('</tr>');       
    win.document.write('</table');
     
       
     //linha 5***********************************
     win.document.write('<br>');  
     win.document.write('<table border="0" height="80px">');  
    win.document.write('<tr>');
   
    //coluna 1
    win.document.write('<td width="80%">');   
    win.document.write('</td>');    

   //coluna 2
    win.document.write('<td>');  
    win.document.write("R$ "+this.total);
    win.document.write('</td>');   

    win.document.write('</tr>');       
    win.document.write('</table');





    //linha 6***********************************
    win.document.write('<br>');  
    win.document.write('<table border="0" height="105px">');  
    win.document.write('<tr>');
   
    //coluna 1
    win.document.write('<td>');   
    win.document.write('</td>');    
    win.document.write('</table');


     //linha 7***********************************
     win.document.write('<br>');  
     win.document.write('<table border="0" width="100%" height="25px">');  
     win.document.write('<tr>');
   
    win.document.write('<td width=30%">');   
    win.document.write(this.secao_de);
    win.document.write('</td>');  
 
    win.document.write('<td width="30%">');   
    win.document.write(this.secao_para);
    win.document.write('</td>');     

    win.document.write('<td width="40%">');   
     win.document.write('</td>');     
  
    
    win.document.write('</tr>');  
    
    win.document.write('</table>');  

    //linha 8***********************************
    win.document.write('<br>');  
    win.document.write('<table border="0"  width="100%" height="25px">');   
    win.document.write('<tr>');
       
        
    win.document.write('<td width="38%">');   
    //win.document.write(this.data_embarque + "&nbsp" + this.horario+ "&nbsp;&nbsp;"+ this.poltrona);
    win.document.write('</td>');  
   
    win.document.write('<td width="37%">');   
    win.document.write("R$ "+ this.total);
    win.document.write('</td>');  

    win.document.write('<td width="25%">');   
 
    win.document.write('</td>');  
    
        
    win.document.write('</tr>');
    win.document.write('</table');


    //linha 9***********************************
    win.document.write('<br>');  
    win.document.write('<table border="0" width="100%" height="25px">');  

    win.document.write('<tr>');
   
    //coluna 1
    win.document.write('<td width="60%">');   
    win.document.write(this.linha);
    win.document.write('</td>');    

   //coluna 2
    win.document.write('<td>');  
    win.document.write(this.prefixo);
    win.document.write('</td>');   

    win.document.write('</tr>');       
    win.document.write('</table');
 
 
    
    
    //win.document.write('<div class="corpo">');  
  //  win.document.write('<p>'+this.prefixo+'</p>'); 
    //win.document.write('<p>'+this.linha+'</p>');

    win.document.write('<div>'); 
    win.document.write('</body>');
    win.document.write('</html>');
    win.print(); 
    win.close();
  //  history.go(0); 
  
    var data = new Date();
    this.data_emissao =  data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear();
    this.horario = "";
    this.data_embarque = "";
    if (data.getMinutes() < 10){
        this.hora_emissao = data.getHours() + ':0' + data.getMinutes();
    }
    else {
      this.hora_emissao = data.getHours() + ':' + data.getMinutes();
    }
      
  }



  
  imprimir2() {
    var conteudo = document.getElementById('print').innerHTML,
    tela_impressao = window.open('about:blank');
    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
  }



  
  show() {
    const ref = this.dialogService.open(SecaoListComponent, {
        header: 'Escolha uma seção',
        width: '70%',
      //contentStyle: {"max-height": "350px", "overflow": "auto"}
      contentStyle: {"overflow": "auto"}
    });

    ref.onClose.subscribe((secao: Secao) =>{
        if (secao) {
            this.secao = secao;

            this.prefixo= secao.linha_id.prefixo;
            this.linha= secao.linha_id.nome;
            this.secao_de= secao.localidade1_id.nome;
            this.secao_para=  secao.localidade2_id.nome;
            this.tarifa=String(secao.tarifa.toFixed(2));
            this.total= this.tarifa;

           
            var data = new Date();
            this.data_emissao =  data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear();
            this.horario = "";
            this.data_embarque = "";
            if (data.getMinutes() < 10){
                this.hora_emissao = data.getHours() + ':0' + data.getMinutes();
            }
            else {
              this.hora_emissao = data.getHours() + ':' + data.getMinutes();
            }
                  
         
          



        }
    });
  }

}



