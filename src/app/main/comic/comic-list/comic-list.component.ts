import { ComicService } from './../../../share/service/comic-service/comic.service';
import { Comic } from './../../../share/models/Comic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  comics: Comic[];
  title: String = 'Avengers';

  constructor(private comicService: ComicService) { }

  ngOnInit() {

    this.comicService
      .getByTitleStartWith(this.title)
      .subscribe(res => {
        this.comics = res.data.results;
      });
  }

  updateComicsSearch() {

    this.comicService
      .getByTitleStartWith(this.title)
      .subscribe(res => {
        this.comics = res.data.results;
      });
  }

}
