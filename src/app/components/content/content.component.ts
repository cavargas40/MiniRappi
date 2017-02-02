import { Component, OnInit, ElementRef} from '@angular/core';
import { JsonDataService, ProductService } from '../../services/';
import { JsonData, Category, Product } from '../../model/';

declare var jQuery: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  /* Shopping Cart */
  //@Output() productSelected = new EventEmitter();
  public shopCart: Product[];

  /* Datatable & Filter Configuration */
  public data: Product[] = [{ available: false, best_seller: false, categories: [0, 0], description: '', id: 0, img: '', name: '', price: 0 }];;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "name";
  public sortOrder = "asc";
  public categorySelected:number = -1;
  public allSelected:string = "all";
  public mayor30:boolean = false;
  public menor10:boolean = false;

  /* Model Mapping */
  category: Category[] = [{ categori_id: 0, name: '' }] ;
  product: Product[] = [{ available: false, best_seller: false, categories: [0, 0], description: '', id: 0, img: '', name: '', price: 0 }];
  information: JsonData = { categories: this.category, products: this.product };

  constructor(private rappiData: JsonDataService, private rappiProducts: ProductService,
              private el: ElementRef) { }

  ngOnInit(): void {
    jQuery(this.el.nativeElement).find('.modal').modal();
    this.rappiData.getData().then(res => (this.information = res));    
  }

  addToCart(product:Product):void{
    this.shopCart.push(product);    
  }

  deleteToCart(product:Product):void{
    let index = this.shopCart.indexOf(product);
    if(index>-1)
      this.shopCart.splice(index, 1);
  }

  attachEventsPlx(product:Product){
    console.log("so close "+ product.name);
    //jQuery(this.el.nativeElement).find('.modal-trigger').leanModal();

  }


}
