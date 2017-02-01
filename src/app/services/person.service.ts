import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppError } from '../util/app-error';

import { Person } from '../model/person';
import { PERSONS } from '../util/mock-data';

@Injectable()
export class PersonService {

  private dataUrl = "/app/util/PureData.json";

  constructor(private http: Http, private ups: AppError) { }

  getPersons(): Person[] {
    return PERSONS;
  }

  getPersonsOp(): Promise<Person[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then((res) => res.json() as Person[])
      .catch(this.ups.handleError);
  }
}
