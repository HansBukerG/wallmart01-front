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
  public filterValue:string;
  constructor(private dataService:DataService){
    this.filterValue = "";
  }
  ngOnInit(): void {
  }

  searchValues = () => {
    this.ProductData = []
    this.dataService.get(this.filterValue).subscribe(
      resp => {
        console.log(resp);
        this.ProductData = resp
      }
      ,
      error =>{
        console.log("data not found");
      }
    )
  }
}
