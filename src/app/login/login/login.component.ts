import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UtentiService } from 'src/app/services/utenti-service/utenti.service';
import { Utente } from 'src/app/model/utente';

import { Subject, Observable } from 'rxjs';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
//DemoRoutingModule
export class LoginComponent implements OnInit {

  name: string;
		password: string;
	
     
    constructor(private router:Router,private service:LoginService ) { 
    
  }

login(name: string,  password: string){
  
  this.service.OnClickLogin(this.name,this.password);
}

  ngOnInit() {
    
  }

}
