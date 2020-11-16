import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../service/cookie.service';
import { TokenService } from '../../service/token.service';
import { ApiService } from '../../service/api.service';
import { GlobalsService } from '../../service/globals.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private apiService: ApiService,
      private cookieService: CookieService,
      private tokenService: TokenService,
      public globalService: GlobalsService,
  ) { }

  private timerId: any;
  public email: string;
  public password: string;
  public emailValidate: boolean = false;
  public passwordValidate: boolean = false;
  public resultAuth: any;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.authDataScenarioRef();
    }
  }

  onInputEmail(event: any) {
    this.email = event.target.value;
    this.emailValidate = this.validateEmail(event.target.value);
  }

  onInputPassword(event: any) {
    this.password = event.target.value;
    if (event.target.value.length >= 3) {
      this.passwordValidate = true;
    }
    else {
      this.passwordValidate = false;
    }
  }

  validateEmail(email: string)
  {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  authDataScenarioRef() {
    this.authService.refreshTokenServer(this.tokenService.getToken()).subscribe((result: any) => {
          this.resultAuth = result;
          this.tokenService.putAccessToken(result.access_token);
          this.globalService.loggedIn = true;
          this.startRefreshToken(result.expires_in);
        }, (error => alert('Auth Refresh error, code: ' + error.status))
    );
  }

  authDataScenarioIn(emailIn: string, passwordIn: string) {
    this.authService.getAuthDataFromServer(emailIn, passwordIn).subscribe((result: any) => {
          this.resultAuth = result;
          this.tokenService.putAccessToken(result.access_token);
          this.globalService.loggedIn = true;
          this.startRefreshToken(result.expires_in);
    }, (error => alert('Auth Log In error, code: ' + error.status))
    );
  }

  authDataScenarioOut() {
    this.authService.refreshTokenServer(this.tokenService.getToken()).subscribe((result: any) => {
          clearTimeout(this.timerId);
          this.startRefreshToken(result.expires_in);
        }, (error => alert('Auth Log Out error, code: ' + error.status))
    );
  }

  loginByVal() {
    this.authDataScenarioIn(this.email, this.password);
  }

  loginAuto() {
    this.authDataScenarioIn('test14@test.com', '3edfhgfhjsdxdvf');
  }

  logOut() {
    this.globalService.loggedIn = false;
    this.authDataScenarioOut();
    this.tokenService.destroyToken();
  }

  startRefreshToken(timer: number) {
    // console.log(timer);
    this.timerId = setInterval(() => this.authDataScenarioRef(), timer);
  }

}
