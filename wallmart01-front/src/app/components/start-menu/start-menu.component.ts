import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit{
  @Output() SendData = new EventEmitter()

  public ProductData:Product[] = []
  public formSearch!:FormGroup

  constructor(
    private readonly formBuilder:FormBuilder
    ){
  }
  ngOnInit(): void {
    this.formSearch = this.FormInit();
  }

  searchValues = () => {

    if (this.formSearch.valid) {
      this.SendData.emit(this.formSearch.value.search)
    }
  }

  FormInit = () => {
    return this.formBuilder.group(
      {
        search: new FormControl('',Validators.required),
      }
    )
  }
}
