import { Creator } from './../../../share/models/Creator';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CreatorService } from './../../../share/service/creator-service/creator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {

  creator: Creator;
  loading: Boolean;

  constructor(private creatorService: CreatorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.isLoading();

    this.route.paramMap
      .switchMap((params: ParamMap) => this.creatorService.getById(+params.get('id')))
      .subscribe(res => this.creator = res.data.results[0]);
  }

  goToComicDetail(resourceURI: string) {
    const id = resourceURI.split('/').pop();
    this.router.navigate(['/comics', id]);
  }

  isLoading() {
    this.loading = true;
  }

  isLoad() {
    this.loading = false;
  }

}
