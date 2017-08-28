import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CharacterListComponent } from './main/character/character-list/character-list.component';
import { CharacterCardComponent } from './main/character/character-card/character-card.component';
import { CharacterService } from './share/service/character-service/character.service';
import { ComicService } from './share/service/comic-service/comic.service';
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './main/character/character-detail/character-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ComicDetailComponent } from './main/comic/comic-detail/comic-detail.component';
import { ComicListComponent } from './main/comic/comic-list/comic-list.component';
import { ComicCardComponent } from './main/comic/comic-card/comic-card.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './main/home/home.component';
import { SearchComponent } from './main/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailComponent,
    FooterComponent,
    ComicDetailComponent,
    ComicListComponent,
    ComicCardComponent,
    LoaderComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'search',
        component: SearchComponent
      }, {
        path: 'characters',
        component: CharacterListComponent
      }, {
        path: 'character/:id',
        component: CharacterDetailComponent
      }, {
        path: 'comics',
        component: ComicListComponent
      }, {
        path: 'comic/:id',
        component: ComicDetailComponent
      }
    ])
  ],
  providers: [CharacterService, ComicService],
  bootstrap: [AppComponent]
})

export class AppModule { }
