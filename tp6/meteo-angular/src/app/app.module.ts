// debut du fichier
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 // <--  Ajouter les références ici

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule //<-- Ajouter les références ici aussi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }