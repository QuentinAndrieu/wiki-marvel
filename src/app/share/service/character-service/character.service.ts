import { Config } from './../../../../../config';
import { ComicListResponseAPI } from './../../models/Comic';
import { Character, CharacterListResponseAPI } from './../../models/Character';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GenericResponseAPI } from './../../models/GenericResponseAPI';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class CharacterService {

  private baseUrl = Config.BASEURL;
  private apikey = Config.PUBLIC_KEY;
  private privatekey = Config.PRIVATE_KEY;
  private ts = Date.now().toString();
  private hash: string = Md5.hashStr(this.ts + this.privatekey + this.apikey).toString();

  constructor(private http: Http) {

  }

  getById(id: Number): Observable<CharacterListResponseAPI> {

    const character = this.http
      .get(`${this.baseUrl}/characters/${id}?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return character;
  }

  getByNameStartWith(name: String): Observable<CharacterListResponseAPI> {

    const characters = this.http
      .get(`${this.baseUrl}/characters?nameStartsWith=${name}&apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());


    return characters || null;
  }

}
