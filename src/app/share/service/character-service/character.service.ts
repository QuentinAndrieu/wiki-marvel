import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Characters } from './../../models/characters';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class CharacterService {

  private baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  private apikey = 'a9fd6a4369de533b262f0f6e0dbf024d';
  private privatekey = 'bd7316d455e29d7d8b8a59d27d48e847fa774855';
  private name = 'Spider-Man';
  private ts = Date.now().toString();
  private characters = Characters;


  constructor(private http: Http) {

  }


  get(): Observable<Characters> {
    const headers = new Headers();
    const search: URLSearchParams = new URLSearchParams();

    const hash = this.ts + this.privatekey + this.apikey;

    console.log('hash', hash);
    console.log('this.ts + this.privatekey + this.apikey', this.ts + this.privatekey + this.apikey);

    search.set('name', this.name);
    search.set('ts', this.ts); // time stamp
    search.set('apikey', this.apikey);
    search.set('hash', 'b45f215db097c611466c0c5ceecc8dd0');
    console.log(search);

    const characters = this.http
      .get(`${this.baseUrl}/characters?name=${search}?apikey=${this.apikey}`, new RequestOptions({ search }))
      .map(res => res.json());
    return characters;
  }

}
