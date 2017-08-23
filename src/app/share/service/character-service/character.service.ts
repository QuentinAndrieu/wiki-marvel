import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Characters } from './../../models/characters';
import { Md5 } from 'ts-md5/dist/md5';
import { Config } from './../../config/config';

@Injectable()
export class CharacterService {

  private baseUrl = Config.BASEURL;
  private apikey = Config.PUBLIC_KEY;
  private privatekey = Config.PRIVATE_KEY;
  private ts = Date.now().toString();
  private hash: string = Md5.hashStr(this.ts + this.privatekey + this.apikey).toString();

  private characters = Characters;

  constructor(private http: Http) {

  }


  getByName(name: String): Observable<Characters> {

    const characters = this.http
      .get(`${this.baseUrl}/characters?name=${name}&apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return characters;
  }

  getByNameStartWith(name: String): Observable<Characters> {

    const characters = this.http
      .get(`${this.baseUrl}/characters?nameStartsWith=${name}&apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return characters;
  }

}
