import { Component, OnInit, ElementRef, Input, ViewChild, ComponentRef } from '@angular/core';
import { JsonDataService, ProductService } from '../../services/';
import { JsonData, Category, Product, ShoppingCart } from '../../model/';

import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ShoppingCartComponent]
  //,directives: [ShoppingCartComponent] 
})

export class NavbarComponent implements OnInit {

  @ViewChild(ShoppingCartComponent) scc: ComponentRef<ShoppingCartComponent>;

  /* Shopping Cart */
  public shoppingCart = new ShoppingCart();
  public productOnCart: Product[] = [];
  public productSelected = new Product();
  public showCart: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.getJsonStorage();
  }

  getJsonStorage() {
    if (localStorage.getItem("shoppingCart")) {
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

  deleteToCart(product: Product): void {
    console.log("crealas");
    this.productOnCart = this.productOnCart.filter(item => item.id != product.id);
    localStorage.setItem("shoppingCart", JSON.stringify(this.productOnCart));
    this.getJsonStorage();
  }


  refreshCart() {
    // this.showCart = !this.showCart;
    // jQuery(this.el.nativeElement).find('.modal').modal();

    console.log("pa ver");
    this.getJsonStorage();
    // if(this.showCart){
    //   this.showCart = false;  
    //   if (this.scc) {
    //      this.scc.destroy();
    //   }
    // }
    // else
    // {
    //   this.showCart = true;  
    //   jQuery(this.el.nativeElement).find('.modal').modal();
    // }
    //this.getJsonStorage();

    //this.showCart = false;
    // setTimeout(function() {

    // jQuery(this.el.nativeElement).find('.modal').modal();
    // }, 3000);


  }
}
