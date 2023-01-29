import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';




const url = "https://back-data01.fly.dev/search/"
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private domain:string | undefined
  constructor(private http: HttpClient) {
    this.domain = environment.domain
  }

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

  get = (search:string): Observable<Product[]> => {
    return this.http.get<Product[]>(`${this.domain}/search/${search}`);
  }
  getAll = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${this.domain}/search/`);
  }
}
