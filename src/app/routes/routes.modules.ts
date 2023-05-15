import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';
import { RoutesRoutingModule } from './routes-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SortDirective } from './route4/sort.directive';
@NgModule({
  declarations: [ 
    Route1Component,
    Route2Component,
    Route4Component,
    SortDirective
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDropdownModule

  ]
})
export class RoutesModule { }

