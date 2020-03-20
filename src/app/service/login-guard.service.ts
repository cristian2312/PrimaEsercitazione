import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivateChild {

  constructor( private router: Router) { }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(sessionStorage.getItem("name") !=null){
      return true;
    }
      
     else{
       this.router.navigateByUrl('/login');
       return false;
     } 
  }
}
