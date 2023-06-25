import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CL3Component } from './cl3/cl3.component';
import { MaterialModule } from './angularmaterial/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// hola