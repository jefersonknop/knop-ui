import { Inquilino } from '../entities/inquilino';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class InquilinoService {
  constructor(private http: HttpClient) { }
    baseUrl: string = 'https://knop-api.herokuapp.com/inquilinos';

    list() {
      return this.http.get<Inquilino[]>(this.baseUrl);
    }

    getById(id: number) {
      return this.http.get<Inquilino>(this.baseUrl + '/' + id);
    }

    createOrUpdate(inquilino: Inquilino) {
        if (inquilino.id != null){
          return this.http.put(this.baseUrl, inquilino);
        }
        else{
          return this.http.post(this.baseUrl, inquilino);
        }
    }

    
    delete(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
}