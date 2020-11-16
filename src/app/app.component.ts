import {Component, OnInit} from '@angular/core';
import { GlobalsService } from "../service/globals.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
      public globalService: GlobalsService,
  ) {}

  ngOnInit(): void {
  }
}

