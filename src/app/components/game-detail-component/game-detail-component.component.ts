import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameListServiceService } from 'src/app/services/gamelist/game-list-service.service';

@Component({
  selector: 'app-game-detail-component',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.scss']
})
export class GameDetailComponentComponent implements OnInit {
  gameIndex$;

  routeSub: Subscription;
 @Input() childMessage;
 
  constructor(private router: Router, private route: ActivatedRoute,private service:GameListServiceService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {

      this.gameIndex$ = this.service.getGameListById(params.id);
  
      console.log(this.gameIndex$);
  
    });
    }
  
    

  
}
