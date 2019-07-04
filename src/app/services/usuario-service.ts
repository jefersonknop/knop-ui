import { Usuario } from '../entities/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }
  //baseUrl: string = 'http://localhost:8080/usuarios';
 // urlAuth: string = 'http://localhost:8080/api/auth';
 
  baseUrl: string = 'https://knop-api.herokuapp.com//usuarios';
  urlAuth: string = 'https://knop-api.herokuapp.com/api/auth';


  login(usuario: Usuario){
    return this.http.post(this.urlAuth, usuario);
  }


  list() {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Usuario>(this.baseUrl + '/' + id);
  }

  createOrUpdate(usuario: Usuario) {
      if (usuario.id != null){
         return this.http.put(this.baseUrl, usuario);
      }
      else{
         return this.http.post(this.baseUrl, usuario);
      }
  }

  

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}