import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppError } from '../util/app-error';
import { URL } from '../util/url-data';

import { JsonData } from '../model/';

@Injectable()
export class JsonDataService {

  private dataUrl = URL;

  constructor(private http: Http, private ups: AppError) { }

  //get categories and products of the Json and map them!
  getData(): Promise<JsonData> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then((res) => res.json() as JsonData)
      .catch(this.ups.handleError);
  }
}
