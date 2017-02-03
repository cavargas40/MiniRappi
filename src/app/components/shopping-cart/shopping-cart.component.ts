import { Component, OnInit, Input } from '@angular/core';

//import { Product } from '../../model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  //@Input() spcart : Product[];

  constructor() { }

  ngOnInit() {
    //console.log(this.spcart);
  }

}
