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
  loading: Boolean;

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.isLoading();

    this.comicService
      .getByTitleStartWith(this.title)
      .subscribe(res => {
        this.comics = res.data.results;
        this.isLoad();
      });
  }

  updateComicsSearch() {
    this.isLoading();

    this.comicService
      .getByTitleStartWith(this.title)
      .subscribe(res => {
        this.comics = res.data.results;
        this.isLoad();
      });
  }

  isLoad() {
    this.loading = false;
  }

  isLoading() {
    this.loading = true;
  }
}
