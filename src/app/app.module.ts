import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Datatable ng2*/
import { DataTableModule } from 'angular2-datatable';

/*Services*/
import { CategoryService, ProductService, JsonDataService, ToastService } from './services/';

/*Components*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';

/*Pipes*/
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { AllFilterPipe } from './pipes/all-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';

/*Handle Errors*/
import { AppError } from './util/app-error';

@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe,
    NavbarComponent, 
    FooterComponent, 
    ContentComponent, 
    CapitalizePipe, 
    CategoryFilterPipe, 
    AllFilterPipe, 
    PriceFilterPipe
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
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
