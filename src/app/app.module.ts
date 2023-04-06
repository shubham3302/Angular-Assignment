import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { Route3Component } from './route3/route3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route4Component } from './route4/route4.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Route3Component,
    Route4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
