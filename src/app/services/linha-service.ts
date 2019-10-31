import { ConfigService } from './config-service';
import { Linha } from '../entities/linha';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';


@Injectable()
export class LinhaService {
  baseUrl: string = ConfigService.url_Knop_api+ '/linhas';

  constructor(private http: HttpClient) {
    
   }


   


    list() {
      return this.http.get<Linha[]>(this.baseUrl + '/inquilino/' +  SharedService.getInstance().usuario.inquilino_id.id);
  
    
    }

    getById(id: number) {
      return this.http.get<Linha>(this.baseUrl + '/' + id);
    }
    
    createOrUpdate(linha: Linha) {
       linha.inquilino_id = SharedService.getInstance().usuario.inquilino_id.id; 
        if (linha.id != null){
          return this.http.put(this.baseUrl, linha);
        }
        else{
          return this.http.post(this.baseUrl, linha);
        }
    }

    
    delete(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
}