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
  name: string;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {

    this.name = 'Stan Lee';

    this.creatorService
      .getByNameStartWith(this.name)
      .subscribe(res => {
        this.setCreators(res.data.results);
      });
  }

  updateSearch(name: string) {
    if (name) {
      this.creatorService
        .getByNameStartWith(name)
        .subscribe(res => {
          this.setCreators(res.data.results);
        });
    }
  }

  setCreators(creators: Creator[]) {
    this.creators = creators;
  }
}
