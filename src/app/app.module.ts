import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from '../service/api.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { GlobalsService } from '../service/globals.service';
import { LoaderComponent } from './loader/loader.component';
import { ClickOutsideModule } from 'ng-click-outside';
// import {CookieService} from "ngx-cookie-service";
import { CookieService } from '../service/cookie.service';
import { TokenService } from  '../service/token.service';
import { AuthComponent } from './auth/auth.component';
import { FormsdisplayComponent } from './formsdisplay/formsdisplay.component';
import { AuthService } from '../service/auth.service';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    AuthComponent,
    FormsdisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    ClickOutsideModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    NgxPaginationModule,
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
