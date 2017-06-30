import { Component, OnInit } from '@angular/core';
import { Characters } from './../../share/models/characters';
import { CharacterService } from './../../share/service/character-service/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Characters;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService
      .get()
      .subscribe(res => this.characters = res);
  }

}
