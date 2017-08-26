import { Component, OnInit } from '@angular/core';
import { Characters } from './../../share/models/characters';
import { Character } from './../../share/models/character';
import { CharacterService } from './../../share/service/character-service/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  name: String;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService
      .getByNameStartWith(this.name)
      .subscribe(res => {
        this.characters = res.data.results;
      });
  }

  updateCharactersSearch() {
    this.characterService
      .getByNameStartWith(this.name)
      .subscribe(res => {
        this.characters = res.data.results;
      });
  }

}
