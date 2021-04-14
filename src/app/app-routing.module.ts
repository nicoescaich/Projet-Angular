import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component'
import { AppComponent } from './app.component';
import { SportComponent } from './sport/sport.component';
import { MatchComponent } from './match/match.component';
import { MediapolisComponent } from './mediapolis/mediapolis.component';

import { from } from 'rxjs';
import { MovieComponent } from './movie/movie.component';
//ok



const routes: Routes = [
  {path: '', component:BienvenueComponent},
  {path:'sport',component:SportComponent},
  {path:'mentions-legales',component:MentionsLegalesComponent},
  {path:'map',component:MapComponent},
  {path:'match',component:MatchComponent},
  {path:'mediapolis',component:MediapolisComponent},
  {path:'mediapolis/:id',component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
