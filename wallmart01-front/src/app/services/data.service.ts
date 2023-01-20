import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../interfaces/product.interface';



const url = "http://localhost:8000/search/"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOptions = () => {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const option = {
      headers: headers,
      params: {}
    };
    return option;
  }

  public get(search:string){
    return this.http.get<Product[]>(url+search);
  }

}
