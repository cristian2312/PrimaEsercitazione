import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';


@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {


    @Output()
    selectMenuId: EventEmitter<number> =new EventEmitter();
    menuItems: MenuItem[]= [
      {
        id:1,   descrizione: 'home', selezionato: true

      },
      {
        id:2,   descrizione: 'Lista videogiochi', selezionato: true

      },{
        id:3,   descrizione: 'modifica', selezionato: true

      },
      {
        id:4,   descrizione: 'detail', selezionato: true
      }
    ]
  constructor() { }

  ngOnInit(): void {
  }
  
  selectMenuItem(id:number){
    this.selectMenuId.emit(id);
  }
}
