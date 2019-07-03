import { Component, OnInit } from '@angular/core';
import { Linha } from 'src/app/entities/linha';
import { LinhaService } from 'src/app/services/linha-service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-linha-list',
  templateUrl: './linha-list.component.html',
  styleUrls: ['./linha-list.component.css']
})
export class LinhaListComponent implements OnInit {

  linhas: Linha[];
  cols: any[];
            
  constructor(private linhaService: LinhaService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
 
      this.linhaService.list().subscribe(linhas => this.linhas = linhas); 
      this.cols = [
        { field: 'prefixo', header: 'Prefixo/Código' },
        { field: 'nome', header: 'Linha' }, 
        { field: 'tipo', header: 'Tipo' }
      ];
  }

  selectLinha(linha: Linha) {
      this.ref.close(linha);
  }

}

