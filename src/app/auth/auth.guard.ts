import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): boolean{
      console.log('AuthGuard#canActivate called');
      let url:string=state.url;        
      return this.checkLogin(url);
    }

    checkLogin(url:string):boolean{

      console.log(this.authService.loginVariable)

      if(this.authService.loginVariable){

        console.log("isLoggedIn=true");
        return true;
      }

      this.authService.redirectedUrl=url;

      this.router.navigate(['/no-page']);

      return false;
    }

    
}
