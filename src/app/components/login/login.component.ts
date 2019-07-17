import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { CurrentUser } from 'src/app/entities/current-user';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service';
import { Email } from 'src/app/entities/email';
import { EmailService } from 'src/app/services/email-service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  shared : SharedService;
  message: string;
  aguardar: boolean = false;

  email: Email;


  constructor(
    private usuarioService: UsuarioService,
  //  private emailService: EmailService,
    private router: Router
  ) {
    


      this.shared = SharedService.getInstance();

     /// this.usuario.email="jefersonknop@gmail.com";
     /// this.usuario.password="30jk2001";
     /// this.usuario.nome="";
     /// this.usuario.profile="";

  }

  ngOnInit() {}

  login(){
        this.aguardar = true;
        this.message='';
        this.usuarioService.login(this.usuario).subscribe((userAuthentication: CurrentUser) => {
         this.shared.token = userAuthentication.token;
         this.shared.usuario = userAuthentication.usuario;
         this.shared.usuario.profile = this.shared.usuario.profile.substring(5); 
         this.shared.showTemplate.emit(true);        
         this.aguardar = false;
         this.router.navigate(['/']);
        
      },err => {
         this.shared.token = null;
         this.shared.usuario = null;         
         this.shared.showTemplate.emit(false);
         this.message= 'Erro';
         this.aguardar = false;
      });

  }

  cancelLogin(){
      this.message = '';
      this.usuario = new Usuario();
      window.location.href = '/login';
      window.location.reload();
  }


  sendEmail(){
   /* this.email = new Email();
    this.email.titulo = 'teste';
    this.email.texto = 'teste';
    this.email.destinatario = this.usuario.email;    
    this.email.remetente = 'jefersonknop@gmail.com';
    this.emailService.sendMail

    window.location.href = '/login';
    window.location.reload();**/
}


 


 
}
