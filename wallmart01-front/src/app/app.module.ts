import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SaleDetailComponent } from './components/sale-detail/sale-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgUrlPipe } from './pipes/img-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    SalesComponent,
    SaleDetailComponent,
    ImgUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
