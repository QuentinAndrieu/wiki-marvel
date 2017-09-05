import { Path } from './../../../share/path';
import { Comic } from './../../../share/models/Comic';
import { Character } from '../../../share/models/Character';
import { CharacterService } from '../../../share/service/character-service/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;
  loading: Boolean;
  paths: any;

  constructor(private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.setLoading(true);
    
    this.paths = Path;

    this.route.paramMap
      .switchMap((params: ParamMap) => this.characterService.getById(+params.get('id')))
      .subscribe(res => this.character = res.data.results[0]);
  }

  goTo(path: string, resourceURI: string) {
    const id = resourceURI.split('/').pop();
    this.router.navigate([path, id]);
  }

  setLoading(loading: Boolean) {
    this.loading = loading;
  }
}
