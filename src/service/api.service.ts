import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
  private isServer: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.isServer = isPlatformServer(platformId);
  }

  private setHeaders(): HttpHeaders {
    const headersFields: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return new HttpHeaders(headersFields);
  }

  private setRefreshHeaders(token: string): HttpHeaders {
    const headersFields: any = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return new HttpHeaders(headersFields);
  }

  public get<T>(path: string, token: string, params: HttpParams = new HttpParams()): Observable<T> {
    const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    return this.http.get<T>(`${url}${path}`, { headers: this.setRefreshHeaders(token)});
  }

  // public getForms<T>(path: string, key: string): Observable<T> {
  //   const url = this.isServer ? environment.ssr_api_url : environment.api_url;
  //   return this.http.get<T>(`${url}${path}`, JSON.stringify(key));
  // }

  public put<T>(path: string, body: Object = {}): Observable<T> {
    const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    return this.http.put<T>(`${url}${path}`, JSON.stringify(body), { headers: this.setHeaders() });
  }

  public post<T>(path: string, body: Object = {}): Observable<T> {
    const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    return this.http.post<T>(`${url}${path}`, JSON.stringify(body), { headers: this.setHeaders() });
  }

  public delete(path: string): Observable<any> {
    const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    return this.http.delete(`${url}${path}`, { headers: this.setHeaders() });
  }

  public dataRequest<T>(path: string, body: Object = {}): Observable<T> {
    const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    return this.http.post<T>(`${url}${path}`, body);
  }

  public dataRefresh<T>(path: string, token: string): Observable<T> {
    const url = this.isServer ? environment.ssr_api_url : environment.api_url;
    return this.http.post<T>(`${url}${path}`, {},{headers: this.setRefreshHeaders(token)});
  }
}
