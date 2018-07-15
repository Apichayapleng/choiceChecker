import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeFeatureComponent} from './home-feature/home-feature.component';

export const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
