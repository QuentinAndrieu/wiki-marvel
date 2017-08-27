import { CharacterListResponseAPI } from './../../models/Character';
import { ComicListResponseAPI } from './../../models/Comic';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs/Observable';
import { Config } from './../../config/config';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ComicService {


  private baseUrl = Config.BASEURL;
  private apikey = Config.PUBLIC_KEY;
  private privatekey = Config.PRIVATE_KEY;
  private ts = Date.now().toString();
  private hash: string = Md5.hashStr(this.ts + this.privatekey + this.apikey).toString();

  constructor(private http: Http) { }

  getById(id: Number): Observable<ComicListResponseAPI> {

    const comic = this.http
      .get(`${this.baseUrl}/comics/${id}?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return comic;
  }

  getByTitleStartWith(title: String): Observable<ComicListResponseAPI> {

    const comics = this.http
      .get(`${this.baseUrl}/comics?titleStartsWith=${title}&apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return comics;
  }

  getCharactersByComicId(id: Number): Observable<CharacterListResponseAPI> {

    const characters = this.http
      .get(`${this.baseUrl}/comics/${id}/characters?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return characters;

  }
}
