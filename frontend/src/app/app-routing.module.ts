import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { mainRoutes } from './main/main-routing.module';


const routes: Routes = [
  {
    path: '',
    children: [
      ...mainRoutes
    ]
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
