import { Component, OnInit, ElementRef, Input, ViewChild, ComponentRef } from '@angular/core';
import { JsonDataService, ProductService, ToastService } from '../../services/';
import { JsonData, Category, Product, ShoppingCart } from '../../model/';

declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  /* Shopping Cart */
  public shoppingCart = new ShoppingCart();
  public productOnCart: Product[] = [];
  public productSelected = new Product();
  public showCart: boolean = false;
  public totalCart: number = 0;

  constructor(private el: ElementRef, private materialize: ToastService) { }

  ngOnInit() {
    this.getJsonStorage();
  }

  getJsonStorage() {
    if (localStorage.getItem("shoppingCart")) {
      this.productOnCart = JSON.parse(localStorage.getItem("shoppingCart"));
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

  deleteToCart(product: Product): void {
    this.productOnCart = this.productOnCart.filter(item => item.id != product.id);
    localStorage.setItem("shoppingCart", JSON.stringify(this.productOnCart));
    this.getJsonStorage();
    this.materialize.toast('Se eliminó el producto correctamente!', 4000, 'rounded');
    this.getTotalCart();
  }

  refreshCart() {
    this.getJsonStorage();
    this.getTotalCart();
  }

  getTotalCart() {
    if (this.productOnCart.length)
      this.totalCart = this.productOnCart.reduce(function (sum, current) { return sum + current.total }, 0)
  }
}
