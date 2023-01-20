import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService:DataService) { }

  getProduct(search:string):Product[]{
    let products:Product[] = []
    this.dataService.get(search).subscribe(
      response => {
        return response
      },
      error => {
        console.log("Ërror en llamadaaaaa");
        console.log(error);
      }
    )

    // return products
  }

}
