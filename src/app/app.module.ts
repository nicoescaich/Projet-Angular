import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { MapComponent } from './map/map.component';
import { MatchComponent } from './match/match.component';
import { SportComponent } from './sport/sport.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import {FormGroup,FormBuilder,FormControl,ReactiveFormsModule} from '@angular/forms';
import { MediapolisComponent } from './mediapolis/mediapolis.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartementsComponent } from './departements/departements.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    MapComponent,
    MentionsLegalesComponent,
    SportComponent,
    MatchComponent,
    MediapolisComponent,
    MovieComponent,
    DepartementsComponent,
    BienvenueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
