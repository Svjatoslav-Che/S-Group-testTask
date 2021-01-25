import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from '../service/api.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { GlobalsService } from '../service/globals.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { CookieService } from '../service/cookie.service';
import { TokenService } from  '../service/token.service';
import { AuthComponent } from './auth/auth.component';
import { FormsdisplayComponent } from './formsdisplay/formsdisplay.component';
import { AuthService } from '../service/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FormsdisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ClickOutsideModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    HttpClient,
    GlobalsService,
    CookieService,
    TokenService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
