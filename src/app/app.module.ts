import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainComponent } from './main/main.component';
import { CharacterListComponent } from './main/character-list/character-list.component';
import { CharacterComponent } from './main/character/character.component';
import { CharacterService } from './share/service/character-service/character.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MainComponent,
    CharacterListComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
