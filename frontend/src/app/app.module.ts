import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './core/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer.component';
import {MainModule} from './main/main.module';
import {HomeModule} from './features/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    RouterModule,
    HttpClientModule,
    NgbModule.forRoot()

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
