import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjCardComponent } from './_components/proj-card/proj-card.component';
import { ProjPostcardComponent } from './_components/proj-postcard/proj-postcard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjCardComponent,
    ProjPostcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
