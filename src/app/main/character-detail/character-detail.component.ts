import { Character } from './../../share/models/Character';
import { CharacterService } from './../../share/service/character-service/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;

  constructor(private characterService: CharacterService,
    private route: ActivatedRoute) { }



  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.characterService.getById(+params.get('id')))
      .subscribe(res => this.character = res.data.results[0]);
  }


}
