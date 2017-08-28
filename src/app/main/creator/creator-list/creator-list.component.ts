import { CreatorService } from './../../../share/service/creator-service/creator.service';
import { Creator } from './../../../share/models/Creator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-list',
  templateUrl: './creator-list.component.html',
  styleUrls: ['./creator-list.component.css']
})
export class CreatorListComponent implements OnInit {

  creators: Creator[];
  name: String = 'Stan Lee';
  loading: Boolean;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
    this.isLoading();

    this.creatorService
      .getByNameStartWith(this.name)
      .subscribe(res => {
        this.creators = res.data.results;
        this.isLoad();
      });
  }

  updateCreatorsSearch() {
    this.isLoading();

    this.creatorService
      .getByNameStartWith(this.name)
      .subscribe(res => {
        this.creators = res.data.results;
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
