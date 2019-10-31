import { Localidade } from '../entities/localidade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ConfigService } from './config-service';


@Injectable()
export class LocalidadeService {
  baseUrl: string = ConfigService.url_Knop_api+ '/localidades';

  constructor(private http: HttpClient) { }
  


    list() {
      return this.http.get<Localidade[]>(this.baseUrl + '/inquilino/' +  SharedService.getInstance().usuario.inquilino_id.id);
  
    
    }

    getById(id: number) {
      return this.http.get<Localidade>(this.baseUrl + '/' + id);
    }

    createOrUpdate(localidade: Localidade) {
     
       localidade.inquilino_id = SharedService.getInstance().usuario.inquilino_id.id; 
        if (localidade.id != null){
          return this.http.put(this.baseUrl, localidade);
        }
        else{
          return this.http.post(this.baseUrl, localidade);
        }
    }

    
    delete(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
}