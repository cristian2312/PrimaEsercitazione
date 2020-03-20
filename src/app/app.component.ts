import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  

  //@ViewChild(MenuComponentComponent)
  //menuComponentRef: MenuComponentComponent;
  constructor(router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        console.log('NavigationStart');
      }
      if(event instanceof NavigationEnd) {
        console.log('NavigationEnd');
      }
      if(event instanceof NavigationCancel) {
        console.log('NavigationCancel');
      }
      if(event instanceof NavigationError) {
        console.log('NavigationError');
      }
    });
  }
}
