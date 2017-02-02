import { Component, OnInit, ElementRef } from '@angular/core';
import { JsonDataService, ProductService } from '../../services/';
import { JsonData, Category, Product, ShoppingCart } from '../../model/';


declare var jQuery: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  /* Shopping Cart */
  public shoppingCart = new ShoppingCart();

  /* Datatable & Filter Configuration */
  public data = new Product(); // [{ available: false, best_seller: false, categories: [0, 0], description: '', id: 0, img: '', name: '', price: 0 }];;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "name";
  public sortOrder = "asc";
  public categorySelected: number = -1;
  public allSelected: string = "all";
  public mayor30: boolean = false;
  public menor10: boolean = false;

  /* Model Mapping */
  public information: JsonData = new JsonData();

  constructor(private rappiData: JsonDataService, private rappiProducts: ProductService,
    private el: ElementRef) { }

  ngOnInit(): void {
    jQuery(this.el.nativeElement).find('.modal').modal();
    this.rappiData.getData().then(res => {
      this.information = res;
      console.log("Chupelo 4");
      let cualquiercosa = this.information.products.map(function (num) {
        num.price = +num.price.toString().replace('.', '');
        return num
      })
      this.information.products = cualquiercosa;
    });
  }

  addToCart(product: Product, amount: number): void {
    product.quantity = amount;
    this.shoppingCart.products.push(product);

    localStorage.setItem("shoppingCart",  JSON.stringify(this.shoppingCart));
  }

  deleteToCart(product: Product): void {
    this.shoppingCart.products = this.shoppingCart.products.filter(item=>{item.id !== product.id});

    localStorage.setItem("shoppingCart",  JSON.stringify(this.shoppingCart));
  }

  attachEvent(product: Product) {
    console.log("so close " + product.name);
  }
}
