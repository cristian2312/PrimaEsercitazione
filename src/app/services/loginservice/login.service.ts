import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { UtentiService } from '../utenti-service/utenti.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  utenti:Utente[];
		bo:boolean;
private  loggedUser: Subject<string>= new Subject<string>();
  loggedUser$: Observable<string>=this.loggedUser.asObservable();

  constructor(private router:Router,private utentiservice:UtentiService) { 
    this.utenti=this.utentiservice.listaUtenti();
  }

  OnClickLogin(name: string,
    password: string): void {

    if (name != null && password != null) {
      console.group("Form View-Model");
      console.log("Name:", name);

      console.groupEnd();

      if (this.utentiservice.checkUserProfile(name, password)) {
        sessionStorage.setItem('name', name);
        this.loggedUser.next(name);
        this.router.navigateByUrl('/portale/home');

      }
      else {
        this.router.navigateByUrl('/login');

      }


    }
  }


  
}
