import { CanActivate, Router} from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    public shared: SharedService; 

    constructor (private router: Router){
        this.shared = SharedService.getInstance();
    }

    canActivate(
        route: import("@angular/router").ActivatedRouteSnapshot,                
        state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
       if (this.shared.isLoggedIn()){
          return true; 
       }
       this.router.navigate(['/login'])
       return false;
    }

  

}