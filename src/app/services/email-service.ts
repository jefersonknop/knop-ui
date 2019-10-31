import { Email } from '../entities/email';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable()
export class EmailService {
  baseUrl: string = ConfigService.url_Knop_api+ '/email';

  constructor(private http: HttpClient) { }
 


  sendMail(email: Email) {   
         return this.http.post(this.baseUrl, email);
      
  }


}