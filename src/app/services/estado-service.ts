import { Estado } from '../entities/estado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EstadoService {
  constructor(private http: HttpClient) { }
 // baseUrl: string = 'http://localhost:8080/estados';
   baseUrl: string = 'https://knop-api.herokuapp.com/estados';

  list() {
    return this.http.get<Estado[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Estado>(this.baseUrl + '/' + id);
  }

  createOrUpdate(estado: Estado) {
      if (estado.id != null){
         return this.http.put(this.baseUrl, estado);
      }
      else{
         return this.http.post(this.baseUrl, estado);
      }
  }

  

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}