import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppError } from '../util/app-error';

import { Category } from '../model/category';

import { URL } from '../util/url-data';

@Injectable()
export class CategoryService {

  private dataUrl = URL;

  constructor(private http: Http, private ups: AppError) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then((res) => res.json().categories as Category[])
      .catch(this.ups.handleError);
  }
}
