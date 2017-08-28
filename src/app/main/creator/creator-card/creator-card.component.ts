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
  loading: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoading();
  }

  goToDetail(id: number) {
    this.router.navigate(['/creator', id]);
  }

  isLoading() {
    this.loading = true;
  }

  isLoad() {
    this.loading = false;
  }

}
