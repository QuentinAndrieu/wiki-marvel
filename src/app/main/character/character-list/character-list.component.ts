import { Path } from './../../../share/path';
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
  name: string;
  paths: any;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {

    this.name = 'Spider-Man';
    this.paths = Path;

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
