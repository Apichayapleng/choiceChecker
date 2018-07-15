import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {homeRoutes} from '../features/home/home-routing.module';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      ...homeRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
