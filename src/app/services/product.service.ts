import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppError } from '../util/app-error';
import { URL } from '../util/url-data';

import { Product } from '../model/';

@Injectable()
export class ProductService {

  private dataUrl = URL;

  constructor(private http: Http, private ups: AppError) { }

  //get products of the Json and map them!
  getProducts(): Promise<Product[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then((res) => res.json().products as Product[])
      .catch(this.ups.handleError);
  }

}
