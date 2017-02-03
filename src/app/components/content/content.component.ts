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
    jQuery(this.el.nativeElement).find('.modal').modal();

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

  prepareProduct(product: Product) {
    let ProductInCart = this.productOnCart.filter(item => item.id == product.id);
    if (ProductInCart.length > 0)
      product = ProductInCart[0];

    this.productSelected = product;
    this.productSelected.quantity = this.productSelected.quantity == null || this.productSelected.quantity == 0 ? 1 : this.productSelected.quantity;
    this.productSelected.total = this.productSelected.price * this.productSelected.quantity;
  }

  //add one product to the ShoppingCart
  addToCart(product: Product): void {
    //si existe en el carro
    this.productOnCart = this.productOnCart.filter(item => item.id != product.id);
    this.productOnCart.push(product);
    this.setJsonStorage();
    this.modal('close');
    this.material.toast('Se agrego el producto correctamente!', 4000, 'rounded');
  }



  GetTotalShop() {
    this.productSelected.total = this.productSelected.quantity * this.productSelected.price;
  }

  /* Obtiene el carrito de compras del localStorage */
  getJsonStorage() {
    if (localStorage.getItem("shoppingCart")) {
      this.productOnCart = JSON.parse(localStorage.getItem("shoppingCart"));
    }
    else {
      this.productOnCart = [];
    }
  }

  /* Guarda el carrito de compras en el localStorage */
  setJsonStorage() {
    if (this.productOnCart) {
      localStorage.setItem("shoppingCart", JSON.stringify(this.productOnCart));
    }
  }

  modal(action: string) {
    if (action == 'close') {
      jQuery(this.el.nativeElement).find('.modal').modal('close');
    }
  }
}
