import { Injectable } from '@angular/core';
import { Utente } from '../../model/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { }
  private utenti: Utente[]=[


    {
     username: 'admin', password:'admin',Email: '',Name: '',LastName: '',Birthdate: new Date(),BirthCity: '',Sex: '',NewsletterSubscription:true,
    },
    {
      username: 'cristian', password:'admin',Email: 'dybala@ciao.it',Name: 'Cristian',LastName: '',Birthdate: new Date(),BirthCity: 'Segrate',Sex: 'uomo',NewsletterSubscription:true,

    },
    {
      username: 'dybala', password:'dybala',Email: 'dybala@ciao.it',Name: 'Paulo',LastName: 'Exequiel',Birthdate: new Date(),BirthCity: 'Laguna Larga',Sex: 'uomo',NewsletterSubscription:true,
     },
     
     {
      username: 'bentancur', password:'admin',Email: 'bentancur@ciao.it',Name: 'Rodrigo',LastName: '',Birthdate: new Date(),BirthCity: 'Montevideo',Sex: 'uomo',NewsletterSubscription:true,
     },
     {
      username: 'isco', password:'admin',Email: 'isco@ciao.it',Name: 'Francisco',LastName: 'Alcoron',Birthdate: new Date(),BirthCity: 'Madrid',Sex: 'uomo',NewsletterSubscription:true,
     },
  ]

  listaUtenti(){ 
    return this.utenti;
  }
}
