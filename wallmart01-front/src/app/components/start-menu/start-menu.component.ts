import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit{
  public ProductData: Product[] = []

  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.searchValues("asdf")
  }

  searchValues = (search:string) => {
    console.log("me estoy llamando");

    this.ProductData = this.productService.getProduct(search)
    console.log("array content:");
    this.ProductData.forEach(element => {

      console.log(element);
    })
    console.log(this.ProductData)
  }
}
