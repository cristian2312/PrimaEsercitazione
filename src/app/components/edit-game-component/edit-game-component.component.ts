import { Component, OnInit } from '@angular/core';
import { EditGameService } from 'src/app/services/edit-gameservice/edit-game.service';

@Component({
  selector: 'app-edit-game-component',
  templateUrl: './edit-game-component.component.html',
  styleUrls: ['./edit-game-component.component.scss']
})
export class EditGameComponentComponent implements OnInit {

  constructor(private p:EditGameService) { }

  ngOnInit(): void {
  }

}
