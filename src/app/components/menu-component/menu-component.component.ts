import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login/login.component';
import { LoginService } from 'src/app/services/loginservice/login.service';
import { MenuServiceService } from 'src/app/services/menuservice/menu-service.service';



@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {
  utente:string;
  showLogin: boolean;
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
     /* {
       id: 4, descrizione: 'Login', url: '/login'
      },*/
      
    ];
  constructor(private router:Router,private loginService:LoginService,private l:MenuServiceService ) {
   this.loginService.loggedUser$.subscribe(value =>{
      this.utente=sessionStorage.getItem('name');
    
    })
    
   }
    
  ngOnInit(): void {
   
  }
  checkLogin() {

  if(sessionStorage.getItem('name')==null){
    return false;
  }
    else{
    return true;
    }
  }
  checkAdmin(){
    if(sessionStorage.getItem('name')===null){
    return false;
  }else{
    return sessionStorage.getItem('name')==='admin';

  }
}
logout(){
    
  sessionStorage.clear();
  this.utente=null;
  this.router.navigateByUrl('/login');

}
checkUser(descrizione: string){
  if(sessionStorage.getItem('name')==='cristian' && descrizione=="Modifica"){
  return false;
}else 
  return true;

}
 

}
