import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/entities/cidade';
import { CidadeService } from 'src/app/services/cidade-service';
import { DynamicDialogRef } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent implements OnInit {
  cidades: Cidade[];
  cols: any[];
            
  constructor(private cidadeService: CidadeService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
 
      this.cidadeService.list().subscribe(cidades => this.cidades = cidades); 
      this.cols = [
        { field: 'nome', header: 'Nome' },
        { field: 'estado_id.nome', header: 'Estado' }
      ];
  }

  selectCidade(cidade: Cidade) {
      this.ref.close(cidade);
  }

}
