import { Md5 } from 'ts-md5/dist/md5';
import { CreatorListResponseAPI } from './../../models/Creator';
import { Observable } from 'rxjs/Observable';
import { Config } from './../../config/config';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CreatorService {

  private baseUrl = Config.BASEURL;
  private apikey = Config.PUBLIC_KEY;
  private privatekey = Config.PRIVATE_KEY;
  private ts = Date.now().toString();
  private hash: string = Md5.hashStr(this.ts + this.privatekey + this.apikey).toString();


  constructor(private http: Http) { }


  getById(id: Number): Observable<CreatorListResponseAPI> {

    const creator = this.http
      .get(`${this.baseUrl}/creators/${id}?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return creator;
  }

  getByNameStartWith(name: String): Observable<CreatorListResponseAPI> {

    const creators = this.http
      .get(`${this.baseUrl}/creators?nameStartsWith=${name}&apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`)
      .map(res => res.json());

    return creators;
  }
}
