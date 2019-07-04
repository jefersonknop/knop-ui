import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/entities/estado';
import { EstadoService } from 'src/app/services/estado-service';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef} from 'primeng/api';

@Component({
  selector: 'app-estado-list',
  templateUrl: './estado-list.component.html',
  styleUrls: ['./estado-list.component.css']
})
export class EstadoListComponent implements OnInit {

  estados: Estado[];
  cols: any[];
            
  constructor(private estadoService: EstadoService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
 
      this.estadoService.list().subscribe(estados => this.estados = estados); 
      this.cols = [
        { field: 'nome', header: 'Nome' },
        { field: 'sigla', header: 'Sigla' }
      ];
  }

  selectEstado(estado: Estado) {
      this.ref.close(estado);
  }

}
