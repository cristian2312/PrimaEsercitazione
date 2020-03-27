import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { GamesListComponentComponent } from './components/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';
//import { DemoRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login/login.component';
import { LoginGuardService } from './service/login-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { MenuServiceService } from './services/menuservice/menu-service.service';
import { EditGameService } from './services/edit-gameservice/edit-game.service';
import { LoginAdminService } from './services/LoginAdmin/LoginAdmin.service';


const appRoutes: Routes = [
  {
    path: 'portale', canActivateChild: [LoginGuardService], children:[
  { path: 'home', component: HomeComponent },
  { path: 'game-list-component', component: GamesListComponentComponent },
  { path: 'edit-game-component', component: EditGameComponentComponent ,canActivate:[LoginAdminService]},
  { path: 'game-detail-component', component: GameDetailComponentComponent},
    ]
 },
 
  { path: 'login', component: LoginComponent ,canActivate:[LoginGuardService] },
  {path:'menu-component', component:MenuComponentComponent, canActivate:[LoginAdminService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponentComponent,
    GamesListComponentComponent,
    GameDetailComponentComponent,
    EditGameComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //DemoRoutingModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
