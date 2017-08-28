import { Character } from '../../../share/models/Character';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;
  loading: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoading();
  }

  goToDetail(id: number) {
    this.router.navigate(['/characters', id]);
  }

  isLoad() {
    this.loading = false;
  }

  isLoading() {
    this.loading = true;
  }

}
