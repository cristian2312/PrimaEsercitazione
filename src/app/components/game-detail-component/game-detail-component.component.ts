import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameListServiceService } from 'src/app/services/gamelist/game-list-service.service';
import { GameItem } from 'src/app/model/game-item';

@Component({
  selector: 'app-game-detail-component',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.scss']
})
export class GameDetailComponentComponent implements OnInit {
  gameIndex:GameItem;
  gameDetail: GameItem;
  routeSub: Subscription;
nome:string;
date:Date;
 @Input() childMessage;

  constructor(private router: Router, private route: ActivatedRoute, private service:GameListServiceService) { 

  }

  ngOnInit(): void {
   
    this.routeSub = this.route.params.subscribe(params => {

       this.service.getGame(params.id).subscribe(value => {
        this.gameDetail = value.body;
      this.nome=this.gameDetail.nome;
       this.gameIndex=this.gameDetail;
       
      });
  
     
  
    });
    }
  
    
    ngOnDestroy() {
     this.routeSub.unsubscribe();
    }
  
}
