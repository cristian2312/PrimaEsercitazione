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

  constructor(private router:Router,private g:UtentiService) { 
    this.utenti=this.g.listaUtenti();
  }

   OnClickLogin(name: string,
		password: string): void {

    if(name != null && password !=null){
		console.group( "Form View-Model" );
		console.log( "Name:",name );

    console.groupEnd();
    if(this.save(name,password)){
      this.router.navigateByUrl('/portale/home'); 
      this.bo=true;
    }
      else{
        this.router.navigateByUrl('/login'); 
        this.bo= false;
      }
   

    }
  }

  save(name: string,password: string):boolean {
  
var indice;

for (indice in this.utenti) {
  
  if(name == this.utenti[indice].username){
    console.log(name);
        sessionStorage.setItem('name', name);
        this.loggedUser.next(name);
        return true;
      }    
      
     
    }
    
  }



  
}
