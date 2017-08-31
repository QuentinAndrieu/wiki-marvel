import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() color: string;
  @Input() pathImg: string;
  @Input() urlDetail: string;
  @Input() title: string;

  loading: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id: number) {
    this.router.navigate([this.urlDetail]);
  }

  isLoad() {
    this.loading = false;
  }

  isLoading() {
    this.loading = true;
  }

}
