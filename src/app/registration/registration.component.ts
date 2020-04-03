import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registraForm: FormGroup;
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
  constructor(private fb: FormBuilder) { 
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
    
  })}

  registra(){
    console.log(this.usernameControl.value);
  }
  ngOnInit(): void {
  }

}
