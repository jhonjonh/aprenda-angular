import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoModule } from './apresentacao';
import { ComofasModule } from './comofas';
import { MadeOfModule } from './made-of';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApresentacaoModule,
    MadeOfModule,
    ComofasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
