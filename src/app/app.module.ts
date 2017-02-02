import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Datatable ng2*/
import { DataTableModule } from 'angular2-datatable';

/*Services*/
import { PersonService, CategoryService, ProductService, JsonDataService } from './services/';

/*Components*/
import { AppComponent } from './app.component';
import { PersonDtComponent } from './components/person-dt/person-dt.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { DetailsComponent } from './components/shopping-cart/details/details.component';

/*Pipes*/
import { DataFilterPipe } from './pipes/data-filter.pipe';

/*Handle Errors*/
import { AppError } from './util/app-error';




@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe,    
    PersonDtComponent, NavbarComponent, FooterComponent, ContentComponent, ShoppingCartComponent, DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [
    AppError,
    JsonDataService,
    ProductService,
    CategoryService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
