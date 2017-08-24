import { Character } from './../../share/models/Character';
import { CharacterService } from './../../share/service/character-service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id: Number = 1009610;
  character: Character;

  constructor(private characterService: CharacterService) { }



  ngOnInit() {

    this.characterService
      .getById(this.id)
      .subscribe(res => {
        console.log('res', res.data.results[0]);

        this.character = res.data.results[0];
        console.log('this.character', this.character);
      });
  }


}
