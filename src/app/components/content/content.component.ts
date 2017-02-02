import { Component, OnInit } from '@angular/core';

import { JsonDataService, ProductService } from '../../services/';

import { JsonData, Category, Product } from '../../model/';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  /* Datatable Configuration */
  public data: Product[] = [{ available: false, best_seller: false, categories: [0, 0], description: '', id: 0, img: '', name: '', price: 0 }];;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "name";
  public sortOrder = "asc";


  /* Model Mapping */

  category: Category[] = [{ categori_id: 0, name: '' }];
  product: Product[] = [{ available: false, best_seller: false, categories: [0, 0], description: '', id: 0, img: '', name: '', price: 0 }];

  information: JsonData = { categories: this.category, products: this.product };

  constructor(private rappiData: JsonDataService, private rappiProducts: ProductService) { }

  ngOnInit(): void {
    //this.rappiData.getData().then(res => (this.data = res));
    this.rappiProducts.getProducts().then(res => (this.data = res));
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


}
