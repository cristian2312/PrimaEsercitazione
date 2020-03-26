import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EditGameService implements CanActivate{

 
  constructor(private router:Router) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(sessionStorage.getItem('name')!=='admin')
    this.router.navigateByUrl('/home');
    
    return sessionStorage.getItem('name')=='admin';
  }
}
