import { Secao } from '../entities/secao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';


@Injectable()
export class SecaoService {
  constructor(private http: HttpClient) { }
    baseUrl: string = 'https://knop-api.herokuapp.com/secoes';
   // baseUrl: string = 'http://localhost:8080/secoes';


    list() {
      return this.http.get<Secao[]>(this.baseUrl + '/inquilino/' +  SharedService.getInstance().usuario.inquilino_id.id);
    
    }

    getById(id: number) {
      return this.http.get<Secao>(this.baseUrl + '/' + id);
    }

    createOrUpdate(secao: Secao) {
       secao.inquilino_id = SharedService.getInstance().usuario.inquilino_id; 
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