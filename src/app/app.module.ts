import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes: Routes = [
  {
    path: 'portale', canActivateChild: [LoginGuardService], children:[
  { path: 'home', component: HomeComponent },
  { path: 'game-list-component', component: GamesListComponentComponent, children: [
    { path: 'game-detail-component/:id', component: GameDetailComponentComponent}
]}, 
  { path: 'edit-game-component', component: EditGameComponentComponent ,canActivate:[LoginAdminService]},
 
    ] },
 
  { path: 'login', component: LoginComponent ,canActivate:[LoginGuardService] },
  { path:'registration' ,component: RegistrationComponent,},
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
    LoginComponent,
  
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    //DemoRoutingModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
