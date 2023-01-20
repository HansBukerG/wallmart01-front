import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit{
  public ProductData:Product[] = []
  filterValue:string;
  constructor(private dataService:DataService){

  }
  ngOnInit(): void {
  }

  searchValues = () => {
      this.dataService.get(this.filterValue).subscribe(
        resp => {
          console.log(resp);
          this.ProductData = resp
        }
      )

  }
}
