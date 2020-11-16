import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { CookieService } from '../../service/cookie.service';
import { TokenService } from '../../service/token.service';
import { ApiService } from '../../service/api.service';
import { GlobalsService } from '../../service/globals.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-formsdisplay',
  templateUrl: './formsdisplay.component.html',
  styleUrls: ['./formsdisplay.component.scss']
})
export class FormsdisplayComponent implements OnInit {

  public formsData: any;
  public openEditDialog: boolean = false;
  public p: number = 1;
    // dataSource: MatTableDataSource<>;

  constructor(
      private authService: AuthService,
      private apiService: ApiService,
      private cookieService: CookieService,
      private tokenService: TokenService,
      public globalService: GlobalsService,
  ) { }

  ngOnInit(): void {
      this.getDataForms();
  }

  getAllDataRequest(token) {
    return this.apiService.get('/forms', token);
  }

  getDataForms() {
    this.getAllDataRequest(this.tokenService.getToken()).subscribe((result: any) => {
          this.formsData = result;
          console.log(this.formsData);
        }, (error => alert('Forms get error, code: ' + error.status))
    );
  }
}
