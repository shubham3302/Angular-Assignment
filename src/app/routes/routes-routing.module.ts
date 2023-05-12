import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route4Component } from './route4/route4.component';


const routes: Routes = [{ path: 'route1', component: Route1Component },
{ path: 'route2', component: Route2Component },
{ path: 'route4', component: Route4Component },
{ path: 'route3', loadChildren: () => import('./route3/routes3.modules').then(m => m.Routes3Module) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}

