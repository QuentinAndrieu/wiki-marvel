import { Path } from './../../../share/path';
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
  title: string;
  paths: any;

  constructor(private comicService: ComicService) { }

  ngOnInit() {

    this.title = localStorage.getItem('comic') || 'Avengers',
    this.paths = Path;

    this.comicService
      .getByTitleStartWith(this.title)
      .subscribe(res => {
        this.setComics(res.data.results);
      });
  }

  updateSearch(title: string) {
    if (title) {
      this.comicService
        .getByTitleStartWith(title)
        .subscribe(res => {
          this.setComics(res.data.results);
        });
    }
  }

  setComics(comics: Comic[]) {
    this.comics = comics;
  }
}
