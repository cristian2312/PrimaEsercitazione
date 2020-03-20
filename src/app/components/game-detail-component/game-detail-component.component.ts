import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail-component',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.scss']
})
export class GameDetailComponentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
