import { Router } from '@angular/router';
import { Creator } from './../../../share/models/Creator';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.css']
})
export class CreatorCardComponent implements OnInit {

  @Input() creator: Creator;
  loading: Boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  goToDetail(id: number) {
    this.router.navigate(['/creator', id]);
  }

  onLoad() {
    this.loading = false;
  }

}
