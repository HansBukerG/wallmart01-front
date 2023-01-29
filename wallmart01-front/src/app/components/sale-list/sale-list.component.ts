import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent {
  @Input() public ProductData:Product[] = []
  p: number = 1;
  directionLinks:Boolean = true
}
