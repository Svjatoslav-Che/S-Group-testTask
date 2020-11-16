import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';
import { environment } from '../environments/environment';
import { ApiService } from './api.service';
import {CookieService} from "./cookie.service";


@Injectable()
export class AuthService {
    private isServer: boolean;

    constructor(
        private cookieService: CookieService,
        private apiService: ApiService,
        private http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: Object) {
        this.isServer = isPlatformServer(platformId);
    }

    getAuthDataFromServer(emailIn: string, passwordIn: string) {
        return this.apiService.dataRequest(`/auth/login`, {email: emailIn, password: passwordIn});
    }

    // tslint:disable-next-line:typedef
    refreshTokenServer(token: string) {
        return this.apiService.dataRefresh(`/auth/refresh`, token);
    }

    authLogOut(token: string) {
        return this.apiService.dataRefresh(`/auth/logout`, token);
    }

    // private setHeaders(): HttpHeaders {
    //     const headersFields: any = {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //     };
    //     return new HttpHeaders(headersFields);
    // }
    //
    // private setRefreshHeaders(token: string): HttpHeaders {
    //     const headersFields: any = {
    //         Accept: 'application/json',
    //         Authorization: `Bearer ${token}`,
    //     };
    //     return new HttpHeaders(headersFields);
    // }
    //
    // public get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    //     const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    //     return this.http.get<T>(`${url}${path}`, { headers: this.setHeaders(), params });
    // }
    //
    // // public getForms<T>(path: string, key: string): Observable<T> {
    // //   const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    // //   return this.http.get<T>(`${url}${path}`, JSON.stringify(key));
    // // }
    //
    // public put<T>(path: string, body: Object = {}): Observable<T> {
    //     const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    //     return this.http.put<T>(`${url}${path}`, JSON.stringify(body), { headers: this.setHeaders() });
    // }
    //
    // public post<T>(path: string, body: Object = {}): Observable<T> {
    //     const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    //     return this.http.post<T>(`${url}${path}`, JSON.stringify(body), { headers: this.setHeaders() });
    // }
    //
    // public delete(path: string): Observable<any> {
    //     const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    //     return this.http.delete(`${url}${path}`, { headers: this.setHeaders() });
    // }
    //
    // public dataRequest<T>(path: string, body: Object = {}): Observable<T> {
    //     const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    //     return this.http.post<T>(`${url}${path}`, body);
    // }
    //
    // public dataRefresh<T>(path: string, token: string): Observable<T> {
    //     const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    //     return this.http.post<T>(`${url}${path}`, {},{ headers: this.setRefreshHeaders(token)});
    // }


}
