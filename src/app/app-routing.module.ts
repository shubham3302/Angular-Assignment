import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';

const routes: Routes = [{ path: 'route1', component: Route1Component },
{ path: 'route2', component: Route2Component },
{ path: 'route3', component: Route3Component },
{ path: 'route4', component: Route4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
