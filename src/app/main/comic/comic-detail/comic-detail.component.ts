import { Path } from './../../../share/path';
import { Character } from './../../../share/models/Character';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ComicService } from './../../../share/service/comic-service/comic.service';
import { Comic } from './../../../share/models/Comic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comic: Comic;
  characters: Character[];
  loading: Boolean;
  paths: any;


  constructor(private comicService: ComicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.setLoading(true);
    this.paths = Path;

    this.route.paramMap
      .switchMap((params: ParamMap) => this.comicService.getById(+params.get('id')))
      .subscribe(res => this.comic = res.data.results[0]);
  }

  goTo(path: string, resourceURI: string) {
    const id = resourceURI.split('/').pop();
    this.router.navigate([path, id]);
  }

  setLoading(loading: Boolean) {
    this.loading = loading;
  }
}
