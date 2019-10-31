import { Component, OnInit } from '@angular/core';
import { Secao } from 'src/app/entities/secao';
import { SecaoService } from 'src/app/services/secao-service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-secao-list',
  templateUrl: './secao-list.component.html',
  styleUrls: ['./secao-list.component.css']
})
export class SecaoListComponent implements OnInit {
  secoes: Secao[];
  cols: any[];
            
  constructor(private secaoService: SecaoService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
 
      this.secaoService.list().subscribe(secoes => this.secoes = secoes); 

      this.cols = [
        { field: 'linha_id.nome', header: 'Linha' },
        { field: 'descricao', header: 'Origem - Destino' },   
        { field: 'localidade2_id.nome', header: 'Origem' },
        { field: 'tarifa', header: 'Tarifa (R$)' }
        
      ];
      
      
     
  }

  selectSecao(secao: Secao) {
      this.ref.close(secao);
  }

}


