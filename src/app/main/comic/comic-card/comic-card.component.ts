import { Router } from '@angular/router';
import { Comic } from './../../../share/models/Comic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

  @Input() comic: Comic;
  loading: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoading();
  }

  goToDetail(id: number) {
    this.router.navigate(['/comics', id]);
  }

  isLoading() {
    this.loading = true;
  }

  isLoad() {
    this.loading = false;
  }

}
