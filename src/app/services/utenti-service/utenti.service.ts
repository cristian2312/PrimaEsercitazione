import { Injectable } from '@angular/core';
import { Utente } from '../../model/utente';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private httpClient:HttpClient) { }
  private utenti: Utente[]=[

/*
    {
      username: 'admin', password: 'admin', email: '', name: '', lastname: '', birthdate: 'new Date()', birthcity: '', sex: '', newslettersubscription: "true",
    },
    {
      username: 'cristian', password: 'admin', email: 'dybala@ciao.it', name: 'Cristian', lastname: '', birthdate:" new Date()", birthcity: 'Segrate', sex: 'uomo', newslettersubscription: "true",

    },
    {
      username: 'dybala', password: 'dybala', email: 'dybala@ciao.it', name: 'Paulo', lastname: 'Exequiel', birthdate: "new Date()", birthcity: 'Laguna Larga', sex: 'uomo', newslettersubscription: "true",
    },

    {
      username: 'bentancur', password: 'admin', email: 'bentancur@ciao.it', name: 'Rodrigo',lastname: '', birthdate: "new Date()", birthcity: 'Montevideo', sex: 'uomo', newslettersubscription: "true",
    },
    {
      username: 'isco', password: 'admin', email: 'isco@ciao.it', name: 'Francisco', lastname: 'Alcoron', birthdate: "new Date()", birthcity: 'Madrid', sex: 'uomo', newslettersubscription: "true",
    },*/
  ]

  listaUtenti(){ 
    return this.utenti;
  }

  checkUserProfile(name: string,
    password: string) {
    var indice;
    return this.utenti.some(item => { 
      return name ==item.username;
       })
   
  }

  getUserProfile(name: string,
		password: string){

  }

  editUserProfile(name: string,
		password: string){

  }

  getUtenti(): Observable<Utente[]>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.httpClient.get<Utente[]>('http://localhost:3000/utenti/', 
    { headers:  httpHeaders});
  }
  getUtente(id: number): Observable<HttpResponse<Utente>>{
    return this.httpClient.get<Utente>('http://localhost:3000/utenti/'+id, 
    { observe: 'response'});
  }
    
  putUtente(game: Utente){
    return this.httpClient.put('http://localhost:3000/utenti/'+game.username, game,
    { observe: 'response'});
  }

  postUtente(utente: Utente){
    return this.httpClient.post('http://localhost:3000/utenti/', utente,
    { observe: 'response'});
  }

  deleteGame(username:string){
    return this.httpClient.delete<Utente>('http://localhost:3000/utenti/'+username, 
    { observe: 'response'});
  }
}
