import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public formSearch!:FormGroup

  constructor(
    private dataService:DataService,
    private readonly formBuilder:FormBuilder
    ){
    this.filterValue = "";
  }
  ngOnInit(): void {
    this.formSearch = this.FormInit();
    this.pageInit();
  }

  searchValues = () => {
    this.ProductData = []
    if (this.formSearch.valid) {
      this.dataService.get(this.formSearch.value).subscribe(
        resp => {
          if (resp != null ){
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

  FormInit = () => {
    return this.formBuilder.group(
      {
        search: new FormControl('',Validators.required),
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
