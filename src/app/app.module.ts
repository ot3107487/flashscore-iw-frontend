import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * componente - ts (controller), html (view), css (beauty)
 * servicii - gestiune date (apeluri API, shareuire de date intre componente)
 * pipes - transformarea datelor (e.g. pipe de data - primeste un Date si il formateaza)
 * directive - strcuturale si functionale (care genereaza cod html / stiluri / aplica asupra datelor)
 * guards - clase care implementeaza functii specifice care te lassa sau nu te lasa sa faci anumite lucruri
 */