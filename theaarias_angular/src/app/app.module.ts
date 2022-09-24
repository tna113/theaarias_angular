import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjCardComponent } from './_components/proj-card/proj-card.component';
import { CardContainerComponent } from './_components/card-container/card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjCardComponent,
    CardContainerComponent
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
