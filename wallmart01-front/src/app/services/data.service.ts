import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  url = "http://localhost:8000/search/"
  constructor(private http: HttpClient) { }

  getOptions = () => {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const optionsWithToken = {
      headers: headers,
      params: {}
    };
    return optionsWithToken;
  }

  public get(search:string){

    console.log(this.url+search);

    return this.http.get<Product[]>(this.url+search,this.getOptions()); // get de la api
  }

}
