import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  currentsection: number=1;

  @ViewChild(MenuComponentComponent)
  menuComponentRef: MenuComponentComponent;

  
}
