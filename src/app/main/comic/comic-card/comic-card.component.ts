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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id: number) {
    this.router.navigate(['/comic', id]);
  }

}
