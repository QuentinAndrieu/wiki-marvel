import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainComponent } from './main/main.component';
import { CharacterListComponent } from './main/character-list/character-list.component';
import { CharacterCardComponent } from './main/character-card/character-card.component';
import { CharacterService } from './share/service/character-service/character.service';
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './main/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MainComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      }, {
        path: 'characters',
        component: CharacterListComponent
      }, {
        path: 'character-detail',
        component: CharacterDetailComponent
      }

    ])
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
