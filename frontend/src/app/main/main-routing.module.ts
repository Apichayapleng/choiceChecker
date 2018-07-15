import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';

export const mainRoutes: Routes = [
  // path: '',
  // component: MainComponent,
  // children: [],
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
