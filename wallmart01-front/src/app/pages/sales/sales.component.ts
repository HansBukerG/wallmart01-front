import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  public ProductData:Product[] = []
  public CheckData:Boolean = true;
  public filterValue:string = "";
  public pageNumber!:number;
  constructor(
    private dataService:DataService,
    ){}

  ngOnInit(): void {
    this.PageInit()
  }

  ReceiveData(event:string){
    this.SendRequest(event)
  }

  SendRequest(searchValue:string){
    this.ProductData = []
    this.dataService.get(searchValue).subscribe(
      resp => {
        if (resp != null ){
          this.ProductData = resp
          this.CheckDataF()
        }else{
          console.log("there is an error");
          this.CheckDataF()
        }
      }
      ,
      error =>{
        console.log("there is an error");

        this.CheckDataF()
      }
    )
  }

  PageInit = () => {
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
      this.pageNumber = 1
      this.CheckData = true
    }
  }
}
