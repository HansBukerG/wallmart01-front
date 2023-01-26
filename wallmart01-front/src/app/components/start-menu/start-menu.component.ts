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
  public CheckData:Boolean = true;

  constructor(private dataService:DataService){
    this.filterValue = "";
  }
  ngOnInit(): void {
    this.pageInit();
  }

  searchValues = () => {
    this.ProductData = []
    this.dataService.get(this.filterValue).subscribe(
      resp => {
        if (resp.length != 0 ){
          this.ProductData = resp
          this.CheckDataF()
        }else{
          this.CheckDataF()
        }

      }
      ,
      error =>{
        this.CheckDataF()
      }
    )
  }

  pageInit = () => {
    this.ProductData = []
    this.dataService.getAll().subscribe(
      resp => {

        this.ProductData = resp
        this.CheckDataF()
      }
      ,
      error =>{
        this.CheckDataF()
      }
    )
  }

  CheckDataF = () => {
    if (this.ProductData.length == 0){
      this.CheckData = false
    }else{
      this.CheckData = true
    }
  }
}
