import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UtentiService } from '../services/utenti-service/utenti.service';
import { Observable } from 'rxjs';
import { Utente } from '../model/utente';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registraForm: FormGroup;
  users: Observable<Utente[]>;

  constructor(private fb: FormBuilder, private utentiService: UtentiService) {

    this.registraForm = this.fb.group({
       username: ['', Validators.required],
       password: ['', Validators.required],
       email: ['', Validators.required],
       name: ['', Validators.required],
       lastname: ['', Validators.required],
       birthdate: ['', Validators.required],
       birthcity: ['', Validators.required],
       sex: ['', Validators.required],
       newslettersubscription: ['', Validators.required],
 
     })
   }

  get usernameControl(): FormControl {
    return this.registraForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.registraForm.get('password') as FormControl;
  }

  get emailControl(): FormControl {
    return this.registraForm.get('email') as FormControl;
  }

  get nameControl(): FormControl {
    return this.registraForm.get('name') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.registraForm.get('lastname') as FormControl;
  }
  get birthdateControl(): FormControl {
    return this.registraForm.get('birthdate') as FormControl;
  }
  get birthcityControl(): FormControl {
    return this.registraForm.get('birthcity') as FormControl;
  }
  get sexControl(): FormControl {
    return this.registraForm.get('sex') as FormControl;
  }
  get newslettersubscriptionControl(): FormControl {
    return this.registraForm.get('newslettersubscription') as FormControl;
  }
  recuperaListaUsers() {
    this.users = this.utentiService.getUtenti();
  }
  ngOnInit(): void {

    this.recuperaListaUsers();
  }
  

  registra() {
    console.log( this.registraForm.get('username').value),
   
   // console.log(this.registraForm.value),
    this.utentiService.postUtente({
   //   id: 2,
      username: this.registraForm.get('username').value,
      password: this.registraForm.get('password').value,
      email: this.registraForm.get('email').value,
      name: this.registraForm.get('name').value,
      lastname: this.registraForm.get('lastname').value,
      birthdate: this.registraForm.get('birthdate').value,
      birthcity: this.registraForm.get('birthcity').value,
      sex: this.registraForm.get('sex').value,
      newslettersubscription: this.registraForm.get('newslettersubscription').value
     
    }).subscribe(() => {
     this.recuperaListaUsers();
    })

  }

 


}
