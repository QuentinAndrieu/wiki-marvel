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
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './main/character/character-detail/character-detail.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailComponent,
    FooterComponent,
    InfoComponent
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
        path: 'character/:id',
        component: CharacterDetailComponent
      }

    ])
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
