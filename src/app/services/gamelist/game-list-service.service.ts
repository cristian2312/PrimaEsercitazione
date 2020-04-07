import { Injectable } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameListServiceService {
 public listaVideogiochi: GameItem[];

  
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
