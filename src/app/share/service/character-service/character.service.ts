import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Characters } from './../../models/characters';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class CharacterService {

  private baseUrl = 'https://gateway.marvel.com:443/v1/public';
  private apikey = 'a9fd6a4369de533b262f0f6e0dbf024d';
  private privatekey = 'bd7316d455e29d7d8b8a59d27d48e847fa774855';

  private characters = Characters;


  constructor(private http: Http) {

  }


  getAll(name: string): Observable<Characters> {
    const ts = Date.now().toString();
    const hash: string = Md5.hashStr(ts + this.privatekey + this.apikey).toString();
    console.log('hash', hash);

    const characters = this.http
      .get(`${this.baseUrl}/characters?nameStartsWith=${name}&apikey=${this.apikey}&ts=${ts}&hash=${hash}`)
      .map(res => res.json());
    return characters;
  }

}
