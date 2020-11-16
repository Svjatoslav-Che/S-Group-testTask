import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../service/globals.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public globals: GlobalsService) { }

  ngOnInit(): void {
  }
}
