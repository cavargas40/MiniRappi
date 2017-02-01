import { Component, OnInit } from '@angular/core';

import { JsonDataService } from '../../services/';

import { JsonData, Category, Product } from '../../model/';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  category : Category[] = [{ categori_id : 0, name : '' }];
  product:  Product[] = [{ available: false, best_seller: false, categories:[0,0],description:'',id:0, img:'', name:'', price:'' }];

  data: JsonData = { categories : this.category, products : this.product };

  constructor(private rappiProducts:JsonDataService) { }

  ngOnInit() {
    this.rappiProducts.getData().then(res=>(this.data = res));
    //console.log(this.data);
  }

}
