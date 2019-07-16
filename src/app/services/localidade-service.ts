import { Localidade } from '../entities/localidade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';


@Injectable()
export class LocalidadeService {
  constructor(private http: HttpClient) { }
    baseUrl: string = 'https://knop-api.herokuapp.com/localidades';
    //baseUrl: string = 'http://localhost:8080/localidades';


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