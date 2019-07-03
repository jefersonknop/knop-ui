import { HttpInterceptor, HttpRequest, HttpEvent} from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  

    shared: SharedService;

    constructor(){
        this.shared = SharedService.getInstance();
    }


    intercept(req: HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<HttpEvent<any>> {
        let authRequest : any;

        if (this.shared.isLoggedIn()){
            authRequest = req.clone({
                setHeaders: {
                    'Authorization' : this.shared.token
                 //  'Authorization' :SharedService.getInstance().token
                }
            });
            return next.handle(authRequest);
        }
        else{
            return next.handle(req);
       }

     
    }
    


  

}