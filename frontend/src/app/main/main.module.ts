import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeaturesModule } from '../features/features.module';
import { FooterComponent } from '../core/footer/footer.component';
import { NavbarComponent } from '../core/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FeaturesModule,
    RouterModule,
  ],
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class MainModule { }
