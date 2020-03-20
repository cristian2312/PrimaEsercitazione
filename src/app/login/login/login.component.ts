import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
//DemoRoutingModule
export class LoginComponent implements OnInit {

  
		name: string;
		password: string;
	
  /*
  this.form = {
    name: "",
    password: "",
  }*/
  constructor(private router:Router) { 
    
  }
  public OnClickLogin(): void {
    if(this.name != null && this.password){
		console.group( "Form View-Model" );
		console.log( "Name:", this.name );
		console.log( "Password:", this.password );
    console.groupEnd();
    this.save();
    this.router.navigateByUrl('/portale/home'); 

    }
  }
  save(){
      sessionStorage.setItem("name", this.name);
     // sessionStorage.setItem("password", this.password);
  }
 
stampa(){
  console.log(''+sessionStorage.getItem("name"));
}

  ngOnInit() {
  }

}
