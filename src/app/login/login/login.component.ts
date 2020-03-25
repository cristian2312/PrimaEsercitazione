import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UtentiService } from 'src/app/services/utenti-service/utenti.service';
import { Utente } from 'src/app/model/utente';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
//DemoRoutingModule
export class LoginComponent implements OnInit {

  utenti:Utente[];
		name: string;
		password: string;
	
    private loggedUser: Subject<string>= new Subject();
    loggedUser$: Observable<string>=this.loggedUser.asObservable();

    constructor(private router:Router,private g:UtentiService ) { 
    
  }

  
  public OnClickLogin(): void {

    if(this.name != null && this.password !=null){
		console.group( "Form View-Model" );
		console.log( "Name:", this.name );
	//	console.log( "Password:", this.password );
    console.groupEnd();
    if(this.save()){
      this.router.navigateByUrl('/portale/home'); 
    }
      else{
        this.router.navigateByUrl('/login'); 
      }
   

    }
  }
  save():boolean {
   

  
var indice;

for (indice in this.utenti) {
  
  if(this.name == this.utenti[indice].username){
        sessionStorage.setItem('name', this.name);
        this.loggedUser.next(name);
        return true;
      }    
      
     
    }
    
  }
 
stampa(){
  console.log(''+sessionStorage.getItem("name"));
}

  ngOnInit() {
    this.utenti=this.g.listaUtenti();
  }

}
