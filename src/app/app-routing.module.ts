/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { GamesListComponentComponent } from './components/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';
import { LoginComponent } from './login/login/login.component';
import { LoginGuardService } from './service/login-guard.service';
import { CanActivate } from '@angular/router';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: {title: 'titolo'},canActivate:[LoginGuardService] },
    { path: 'game-list-component', component: GamesListComponentComponent, canActivate:[LoginGuardService]},
    { path: 'edit-game-component', component: EditGameComponentComponent ,canActivate:[LoginGuardService]},
    { path: 'game-detail-component', component: GameDetailComponentComponent , canActivate:[LoginGuardService]},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule { }*/