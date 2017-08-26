import { Character } from '../../../share/models/Character';
import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id: number) {
    this.router.navigate(['/character', id]);
  }

}
