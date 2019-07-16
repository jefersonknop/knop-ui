import { Email } from '../entities/email';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmailService {
  constructor(private http: HttpClient) { }
 // baseUrl: string = 'http://localhost:8080/email';
   baseUrl: string = 'https://knop-api.herokuapp.com/email';


  sendMail(email: Email) {   
         return this.http.post(this.baseUrl, email);
      
  }

  
}