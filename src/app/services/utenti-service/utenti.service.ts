import { Injectable } from '@angular/core';
import { Utente } from '../../model/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { }
  private utenti: Utente[]=[


    {
     username: 'admin', password:'admin'

    },
    {
      username: 'cristian', password:'admin'

    },
  ]

  listaUtenti(){ 
    return this.utenti;
  }
}
