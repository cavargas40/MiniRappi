import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/';

@Component({
  selector: 'app-person-dt',
  templateUrl: './person-dt.component.html',
  styleUrls: ['./person-dt.component.css']
})
export class PersonDtComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";


  constructor(private personserv: PersonService) { }

  ngOnInit(): void {
    this.personserv.getPersonsOp().then(data => this.data = data);
  }

  /**
   * toInt
   */
  public toInt(num: string) {
    return +num;
  }

  /**
   * sortByWordLength
   */
  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

  /**
   * remove
   */
  public remove(item) {
    let index = this.data.indexOf(item);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

}
