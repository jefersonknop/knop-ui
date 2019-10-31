import { Secao } from '../entities/secao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ConfigService } from './config-service';


@Injectable()
export class SecaoService {
  baseUrl: string = ConfigService.url_Knop_api+ '/secoes';

  constructor(private http: HttpClient) { }
   

   ngOnInit() {
    //this.http.get<Secao[]>(this.baseUrl + '/inquilino/' +  SharedService.getInstance().usuario.inquilino_id.id).subscribe(secoes => this.secoes = secoes);    
   }


    list() {     
      return this.http.get<Secao[]>(this.baseUrl + '/inquilino/' +  SharedService.getInstance().usuario.inquilino_id.id);
    
    }

    getById(id: number) {
      return this.http.get<Secao>(this.baseUrl + '/' + id);
    }

    createOrUpdate(secao: Secao) {
       secao.inquilino_id = SharedService.getInstance().usuario.inquilino_id.id; 
        if (secao.id != null){
          return this.http.put(this.baseUrl, secao);
        }
        else{
          return this.http.post(this.baseUrl, secao);
        }
    }

    
    delete(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
}