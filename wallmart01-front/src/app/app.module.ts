import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { SalesComponent } from './pages/sales/sales.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgUrlPipe } from './pipes/img-url.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDepthDetailComponent } from './components/product-depth-detail/product-depth-detail.component';
import { DiscountPercentajePipe } from './pipes/discount-percentaje.pipe';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { SaleListComponent } from './components/sale-list/sale-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    SalesComponent,
    ImgUrlPipe,
    ProductDepthDetailComponent,
    DiscountPercentajePipe,
    PriceFormatPipe,
    SaleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
