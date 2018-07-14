import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FeaturesModule
  ],
  declarations: [
    MainComponent,
  
  ]
})
export class MainModule { }
