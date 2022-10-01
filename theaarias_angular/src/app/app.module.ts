import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjCardComponent } from './_components/proj-card/proj-card.component';
import { ProjPostcardComponent } from './_components/proj-postcard/proj-postcard.component';
import { ProjContainerComponent } from './_components/proj-container/proj-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjCardComponent,
    ProjPostcardComponent,
    ProjContainerComponent
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
