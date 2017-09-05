import { Path } from './../share/path';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  paths: any;

  constructor() { }

  ngOnInit() {
    this.paths = Path;
  }

}
