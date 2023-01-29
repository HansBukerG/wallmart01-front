import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-depth-detail',
  templateUrl: './product-depth-detail.component.html',
  styleUrls: ['./product-depth-detail.component.scss']
})
export class ProductDepthDetailComponent implements OnInit {
  @Input() public item!:Product;

  public valid_item:Boolean = true
  public discount_check:Boolean = false;


  constructor(){

  }
  ngOnInit(): void {
    this.check_invalid_item();
    this.check_discount();
  }

  check_invalid_item(){
    if(this.item.id == 0){
      this.valid_item = false
    }else{
      this.valid_item = true
    }
  }

  check_discount(){
    if(this.item.discount_percentaje > 0 ){
      this.discount_check = true
    }else{
      this.discount_check = false
    }
  }
}
