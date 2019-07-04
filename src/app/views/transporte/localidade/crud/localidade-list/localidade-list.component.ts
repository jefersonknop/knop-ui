import { Component, OnInit } from '@angular/core';
import { Localidade } from 'src/app/entities/localidade';
import { LocalidadeService } from 'src/app/services/localidade-service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-localidade-list',
  templateUrl: './localidade-list.component.html',
  styleUrls: ['./localidade-list.component.css']
})
export class LocalidadeListComponent implements OnInit {

  localidades: Localidade[];
  cols: any[];
            
  constructor(private localidadeService: LocalidadeService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
 
      this.localidadeService.list().subscribe(localidades => this.localidades = localidades); 
      this.cols = [       
        { field: 'nome', header: 'Linha' }, 
        { field: 'tipo', header: 'Tipo' },
        { field: 'cidade_id.nome', header: 'Cidade' },
        { field: 'cidade_id.estado_id.sigla', header: 'Estado' },
      ];
  }

  selectLocalidade(localidade: Localidade) {
      this.ref.close(localidade);
  }

}


