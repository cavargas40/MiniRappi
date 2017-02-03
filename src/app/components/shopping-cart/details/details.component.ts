import { Component, OnInit, Input } from '@angular/core';
import { JsonDataService, ProductService } from '../../../services/';
import { JsonData, Category, Product, ShoppingCart } from '../../../model/';


@Component({
  selector: 'app-sc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /* Shopping Cart */
  public shoppingCart = new ShoppingCart();
  public productOnCart: Product[] = [];
  public productSelected = new Product();
  public jsonString : string = '';

  constructor() { }

  ngOnInit() {
    this.getJsonStorage();
  }

  getJsonStorage() {
    if (localStorage.getItem("shoppingCart")) {
      this.jsonString = localStorage.getItem("shoppingCart");
      this.productOnCart = JSON.parse(localStorage.getItem("shoppingCart"));
      //console.log(this.productOnCart);
    }
    else {
      this.productOnCart = [];
    }
  }

  setJsonStorage() {
    if (this.productOnCart) {
      localStorage.setItem("shoppingCart", JSON.stringify(this.productOnCart));
    }
  }


}