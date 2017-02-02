import { Component, OnInit, ElementRef, Input } from '@angular/core';

//import { Product } from '../../model';

//declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  //@Input() shopped : Product[];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    //jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
    //jQuery(this.el.nativeElement).find('.modal').modal();
  }

}
