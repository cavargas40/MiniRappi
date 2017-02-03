import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { JsonDataService, ProductService, ToastService } from '../../services/';
import { JsonData, Category, Product, ShoppingCart } from '../../model/';


declare var jQuery: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  /* Shopping Cart */
  public productOnCart: Product[] = [];
  public productSelected = new Product();

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
    private el: ElementRef, private material: ToastService) { }

  ngOnInit(): void {
    this.modal('bind');

    //get products of json and replace '.' in the prices
    this.rappiData.getData().then(res => {
      this.information = res;
      let priceReplaced = this.information.products.map(function (num) {
        num.price = +num.price.toString().replace('.', '');
        return num
      });
      this.information.products = priceReplaced;
    });
    
    this.getJsonStorage();
  }

  ngOnDestroy(): void {
    this.setJsonStorage();
  }

  //prepare product for view on "preadd" to cart
  prepareProduct(product: Product) {
    let ProductInCart = this.productOnCart.filter(item => item.id == product.id);
    if (ProductInCart.length > 0)
      product = ProductInCart[0];

    this.productSelected = product;
    this.productSelected.quantity = this.productSelected.quantity == null || this.productSelected.quantity == 0 ? 1 : this.productSelected.quantity;
    this.productSelected.total = this.productSelected.price * this.productSelected.quantity;
  }

  //add one product to the ShoppingCart and notify to the user
  addToCart(product: Product): void {    
    this.productOnCart = this.productOnCart.filter(item => item.id != product.id);
    this.productOnCart.push(product);
    this.setJsonStorage();
    this.modal('close');
    this.material.toast('Se agrego el producto correctamente!', 4000, 'rounded');
  }

  //get the total value of the actual shop
  GetTotalShop() {
    this.productSelected.total = this.productSelected.quantity * this.productSelected.price;
  }

  //get shopping cart of local storage
  getJsonStorage() {
    if (localStorage.getItem("shoppingCart")) {
      this.productOnCart = JSON.parse(localStorage.getItem("shoppingCart"));
    }
    else {
      this.productOnCart = [];
    }
  }

  //save shopping cart in localStorage
  setJsonStorage() {
    if (this.productOnCart) {
      localStorage.setItem("shoppingCart", JSON.stringify(this.productOnCart));
    }
  }

  //initialize or close modals!
  modal(action: string) {
    if (action == 'close') {
      jQuery(this.el.nativeElement).find('.modal').modal('close');
    }else if(action == 'bind'){
      jQuery(this.el.nativeElement).find('.modal').modal();
    }
  }
}
