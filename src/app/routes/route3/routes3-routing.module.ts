import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Route3Component } from './route3.component';


const routes: Routes = [
{ path: '', component: Route3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}

