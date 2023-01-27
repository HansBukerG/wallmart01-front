import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent implements OnInit {
  @Input() public ProductData:Product[] = []
  p: number = 1;
  directionLinks:Boolean = true

  constructor(){}

  ngOnInit(): void {

  }



}
