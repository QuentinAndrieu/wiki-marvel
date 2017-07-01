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

  private characters = Characters;


  constructor(private http: Http) {

  }


  getAll(name: String): Observable<Characters> {
    const ts = Date.now().toString();
    const hash: string = Md5.hashStr(ts + this.privatekey + this.apikey).toString();
    console.log('hash', hash);

    const characters = this.http
      .get(`${this.baseUrl}/characters?name=${name}&apikey=${this.apikey}&ts=${ts}&hash=${hash}`)
      .map(res => res.json());

    return characters;
  }

}
