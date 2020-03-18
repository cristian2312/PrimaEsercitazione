import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { GamesListComponentComponent } from './components/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponentComponent,
    GamesListComponentComponent,
    GameDetailComponentComponent,
    EditGameComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
