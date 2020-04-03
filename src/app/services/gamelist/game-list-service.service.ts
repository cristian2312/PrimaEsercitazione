import { Injectable } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameListServiceService {
 public listaVideogiochi: GameItem[];
/*
    {
      id:0 , nome: 'fifa20',descrizione: 'gioco di calcio',	genere: 'sport',rating: 'aaa',prezzo: 200,anno_uscita: new Date()

    },
    {
      id:1, nome: 'GranTurismo',descrizione: 'corsa',	genere: 'sport',rating: '5',prezzo: 120,anno_uscita: new Date()

    },
    {
      id:2, nome: 'Sonic Generations',descrizione: 'animazione',	genere: 'animazione',rating: 'sonic',prezzo: 50,anno_uscita: new Date()

    },
    {
      id:3, nome: 'Football manager',descrizione: 'animazione',	genere: 'animazione',rating: 'sonic',prezzo: 50,anno_uscita: new Date()

    },
  ]*/
  
  constructor(private httpClient: HttpClient) { 

  }
  

  /*getGameListById( id:number){
    

    return this.listaVideogiochi[id];
  }*/
  getGames(): Observable<GameItem[]>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.httpClient.get<GameItem[]>('http://localhost:3000/games', 
    { headers:  httpHeaders});
  }
    
  getGame(id: number): Observable<HttpResponse<GameItem>>{
    return this.httpClient.get<GameItem>('http://localhost:3000/games/'+id, 
    { observe: 'response'});
  }
    
  putGame(game: GameItem){
    return this.httpClient.put('http://localhost:3000/games/'+game.id, game,
    { observe: 'response'});
  }

  postGame(game: GameItem){
    return this.httpClient.post('http://localhost:3000/games/', game,
    { observe: 'response'});
  }

  deleteGame(id: number){
    return this.httpClient.delete<GameItem>('http://localhost:3000/games/'+id, 
    { observe: 'response'});
  }

}
