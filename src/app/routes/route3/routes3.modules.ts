import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes3-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Route3Component } from './route3.component';
import { Route3aComponent } from './route3a/route3a.component';
import { Route3bComponent } from './route3b/route3b.component';
import { Route3cComponent } from './route3c/route3c.component';
import { Route3dComponent } from './route3d/route3d.component';

@NgModule({
  declarations: [ 
 
    Route3aComponent,
    Route3bComponent,
    Route3cComponent,
    Route3dComponent,
    Route3Component,
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class Routes3Module { }

