import { Component, OnInit} from '@angular/core';
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
  public formsTransform: any;
  public formsTransformTemp: any = undefined;
  public formsDisplay: any;
  public currentPage: number = undefined;
  public currentPaginationNumber: number = undefined;
  public paginatorEnter: number = this.currentPaginationNumber;
  public pagesAtAll: number;
  public currentSearchValue: string;
  public previousSearchValue: string = undefined;
  public searchButton = false;
  public searchOn = false;
  public sortParam: string = undefined;
  public submitPaginationButton = false;
  public openFormChange: string = undefined;
  public editCurrentFormLine = false;
  public editFormID: number;
  public editData = {
    form_field_values: [{
        form_field_id: undefined,
        value: undefined
      }]
    };

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

  getAllDataRequest(token): any {
    return this.apiService.get('/forms', token);
  }

  updateOneFormField(token, formID, data: any): any {
    return this.apiService.update('/forms/' + formID, this.tokenService.getToken(), data).subscribe((result: any) => {
      this.editCurrentFormLine = false;
      this.getDataForms();
        }, (error => alert('Forms Update Error, code: ' + error.status))
    );
  }

  getDataForms(): any {
    this.getAllDataRequest(this.tokenService.getToken()).subscribe((result: any) => {
          this.formsData = result;
          this.formsTransform = JSON.parse(JSON.stringify(result.data));
          this.currentPage = result.meta.page;
          this.currentPaginationNumber = result.meta.per_page;
          this.mathService(this.formsTransform);
        }, (error => alert('Forms Get Error, code: ' + error.status))
    );
  }

  dataSlicer(data: any, begin: number, end: number): any {
    this.formsDisplay = data.slice(begin, end);
  }

  submitPagination(): void {
    if (this.paginatorEnter) {
      this.currentPaginationNumber = this.paginatorEnter;
    }
    this.currentPage = 1;
    this.mathService(this.formsTransform);
    this.submitPaginationButton = false;
  }

  onInputPagination(event: any): void {
    this.paginatorEnter = event.target.value;
    if (this.currentPaginationNumber === event.target.value) {
      this.submitPaginationButton = false;
    } else {
      this.submitPaginationButton = true;
    }
  }

  goPrevPage(): void {
    this.currentPage--;
    this.mathService(this.formsTransform);
  }

  goNextPage(): void {
    this.currentPage++;
    this.mathService(this.formsTransform);
  }

  saveBeforeSort(): void {
    this.formsTransformTemp = JSON.parse(JSON.stringify(this.formsTransform));
  }

  sortTimeUp(value: any): any {
    if (this.formsTransformTemp === undefined) {
      this.saveBeforeSort();
    }
    const newValue = value.sort((a, b) => {
      return (new Date(b.created_at) as any) - (new Date(a.created_at) as any);
    });
    this.currentPage = 1;
    this.mathService(newValue);
    this.sortParam = 'up';
  }

  sortTimeDown(value: any): any {
    if (this.formsTransformTemp === undefined) {
      this.saveBeforeSort();
    }
    const newValue = value.sort((a, b) => {
      return (new Date(a.created_at) as any) - (new Date(b.created_at) as any);
    });
    this.currentPage = 1;
    this.mathService(newValue);
    this.sortParam = 'down';
  }

  sortDisable(): any {
    this.currentPage = 1;
    this.mathService(this.formsTransformTemp);
    this.sortParam = undefined;
  }

  onInputSearch(event: string): any {
    // @ts-ignore
    this.currentSearchValue = event.target.value;
    if ((Boolean(this.currentSearchValue)) &&
        ((this.currentSearchValue).replace(/\s/g, '') !== '') &&
        (this.currentSearchValue !== this.previousSearchValue)) {
      this.searchButton = true;
    } else {
      this.searchButton = false;
    }
  }

  abortSearchResults(): any {
    this.formsTransform = JSON.parse(JSON.stringify(this.formsData.data));
  }

  submitSearch(): any {
    this.previousSearchValue = this.currentSearchValue;
    let i = 0;
    this.formsTransform = [];
    this.formsData.data.forEach(element => {
      element.form_field_values.forEach(element2 => {
        if (element2.value.toLowerCase().search(this.currentSearchValue.toLowerCase()) !== -1) {
          this.formsTransform.push(this.formsData.data[i]);
        }
      });
      i++;
    });
    this.searchOn = true;
    if (this.formsTransform.length === 0) {
      alert('No results for Searching');
      this.disableSearch();
    }
    this.mathService(this.formsTransform);
    this.searchButton = false;
  }

  disableSearch(): void {
    this.abortSearchResults();
    this.searchOn = false;
    this.mathService(this.formsTransform);
    this.currentSearchValue = undefined;
    this.sortParam = undefined;
    this.formsTransformTemp = undefined;
  }

  mathService(data: any): any {
    this.pagesAtAll = Math.ceil(data.length / this.currentPaginationNumber);
    this.dataSlicer(data,
      ((this.currentPage - 1) * this.currentPaginationNumber),
      (this.currentPage * this.currentPaginationNumber));
  }

  createNewForm(): void {
    this.openFormChange = 'create';
  }

  deleteForm(idValue: number): any {
    if (confirm('Delete form ID ' + idValue + ' ?')) {
      return this.apiService.delete('/forms/' + idValue, this.tokenService.getToken()).subscribe((result: any) => {
        this.getDataForms();
          }, (error => alert('Forms Delete Error, code: ' + error.status))
      );
    }
  }

  editCurrentLine(formID: number, lineID: number, value: any) {
    this.editCurrentFormLine = true;
    this.editFormID = formID;
    this.editData.form_field_values[0].form_field_id = lineID;
    this.editData.form_field_values[0].value = value;
  }

  onInputFOrmLine(event: any): void {
    // @ts-ignore
    this.editData.form_field_values[0].value = event.target.value;
  }

  editFormLineAction(): any {
    const data = this.formsTransform = JSON.parse(JSON.stringify(this.editData));
    this.updateOneFormField(this.tokenService.getToken(), this.editFormID, data);
  }

  createNewFormRequest(): any {
    const data: any = {
      form_field_values: []
    };
    // @ts-ignore
    const valueTime = document.getElementById('inputT').value;
    for (let i = 1; i < 6; i++) {
      // @ts-ignore
      const valueForm = document.getElementById('input' + i).value;
      if (valueForm) {
        ((i === 4) && (valueTime)) ? data.form_field_values.push({form_field_id: i, value: valueForm + ' ' + valueTime}) : data.form_field_values.push({form_field_id: i, value: valueForm});
      }
    }
    return this.apiService.create('/forms', this.tokenService.getToken(), data).subscribe((result: any) => {
        this.openFormChange = undefined;
        this.getDataForms();
        }, (error => alert('Forms Create Error, code: ' + error.status))
    );
  }
}
