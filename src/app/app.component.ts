import { Component, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private el:ElementRef) { }

  ngOnInit(){
    jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
    jQuery(this.el.nativeElement).find('.modal').modal();
  }
}
