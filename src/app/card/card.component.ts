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
    this.setLoading(true);
  }

  goTo(urlDetail: string) {
    this.router.navigate([urlDetail]);
  }

  setLoading(loading: Boolean) {
    this.loading = loading;
  }
}
