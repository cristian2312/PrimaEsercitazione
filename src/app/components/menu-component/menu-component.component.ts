import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { Router } from '@angular/router';
import { stringify } from 'querystring';


@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {
  
    menuItems: MenuItem[] = [
      {
        id: 1, descrizione: 'Home', url: '/portale/home'
      },
      {
        id: 2, descrizione: 'Lista Videogiochi', url: '/portale/game-list-component'
      },
      {
        id: 3, descrizione: 'Modifica', url: '/portale/edit-game-component'
      },
      {
       id: 4, descrizione: 'Login', url: '/login'
      },
      
    ];
  constructor(private router:Router) {
    

   }
    
  ngOnInit(): void {
   
  }
  logout(){
    sessionStorage.removeItem('name');
    this.router.navigateByUrl('/login');

  }

  textUser(){
    
 

  }
}
