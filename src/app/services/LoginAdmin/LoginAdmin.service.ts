import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService implements CanActivate {

  constructor(private router: Router) {

   }
   canActivate(){
    if (sessionStorage.getItem('name') !== 'admin'){
      return false;
    }else{return true};
  }
  
}