import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {

  @Input() public ProductData:Product[] = []
  @Input() public p!:number

  directionLinks:Boolean = true;

  handlePageChange(event:any) {
    this.p = event;
  }
  ngOnInit(): void {
    console.log("me hrecargado");

    // throw new Error('Method not implemented.');
  }
}
