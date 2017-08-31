import { Character } from './../../../share/models/Character';
import { Component, OnInit } from '@angular/core';
import { GenericResponseAPI } from '../../../share/models/GenericResponseAPI';
import { CharacterService } from '../../../share/service/character-service/character.service';

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

    this.name = 'Spider-Man';

    this.characterService
      .getByNameStartWith(this.name)
      .subscribe(res => {
        this.setCharacters(res.data.results);
      });
  }

  updateSearch(name: string) {
    if (name) {
      this.characterService
        .getByNameStartWith(name)
        .subscribe(res => {
          this.setCharacters(res.data.results);
        });
    }
  }

  setCharacters(characters: Character[]) {
    this.characters = characters;
  }

}
