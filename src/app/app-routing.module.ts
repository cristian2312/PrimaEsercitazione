import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { GamesListComponentComponent } from './components/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: {title: 'titolo'} },
    { path: 'game-list-component', component: GamesListComponentComponent },
    { path: 'edit-game-component', component: EditGameComponentComponent },
    { path: 'game-detail-component', component: GameDetailComponentComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule { }