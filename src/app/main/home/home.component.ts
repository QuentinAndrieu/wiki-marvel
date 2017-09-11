import { Path } from './../../share/path';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paths = Path;

  constructor(private router: Router) { }

  ngOnInit() {
    this.paths = Path;
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
