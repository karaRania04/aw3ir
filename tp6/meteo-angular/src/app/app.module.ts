import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// debut du fichier
import { FormsModule } from '@angular/forms'; // <--  Ajouter la référence ici

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //<-- Ajouter la référence ici aussi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }