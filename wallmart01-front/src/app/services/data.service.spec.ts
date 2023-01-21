import {HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../interfaces/product.interface';

import { DataService } from './data.service';

const test_url = "http://localhost:8000/search/"

describe('DataService', () => {
  let service: DataService;
  let testProducts: Observable<Product[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(DataService);
  });

  it('Should return a list of products', () => {
    testProducts = service.get(test_url);

    expect(testProducts).toBeDefined();
  });
});
