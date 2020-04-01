import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { GameListServiceService } from 'src/app/services/gamelist/game-list-service.service';

@Component({
  selector: 'app-games-list-component',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.scss']
})
export class GamesListComponentComponent implements OnInit {
  
 /* @Output()
  selectGameId: EventEmitter<number> =new EventEmitter();
*/
  @Output()
 gameDetail;
  constructor(private g:GameListServiceService) { }
  
  gameItems: GameItem[];
  ngOnInit(): void {
    this.gameItems= this.g.lista();
  }

 /* selectGameItem(id:number){
    this.selectGameId.emit(id);
  }*/
  

}
