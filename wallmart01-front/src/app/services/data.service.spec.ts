import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../interfaces/product.interface';
import { DataService } from './data.service';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

export class TestingModule { }

describe('DataService', () => {
  let httpClient: HttpClient;
  let service: DataService;
  let httpTestingController:HttpTestingController
  let testProducts: Observable<Product[]>;
  let ProductData:Product[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[ DataService ]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.get(DataService)
    httpTestingController = TestBed.get(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('Should get data', () => {
    let product:Product = {
      Id_object: '63cbfbfb7fab0ead15f08be1',
      id: 18,
      brand: 'asdfdsa',
      description: 'zdczs omedat',
      image: 'www.lider.cl/catalogo/images/smartphoneIcon.svg',
      price: 424833,
      discount_percentaje: 50,
      original_price: 849666
    }

    const test_url = environment.domain + "/search/asdfdsa"
    httpClient.get<Product[]>(test_url).subscribe((data) => {
      expect(data[0]).toEqual(product);
    });
  //   const firstRequest = httpTestingController.expectOne(test_url);
  //   // firstRequest.flush([]);

  //   const requests = httpTestingController.match(test_url);

  //   requests[0].flush([]);
  //   requests[1].flush([]);
  // //   let checkOk:Boolean = false;
  //   ProductData = [];
  //   service.get(test_url)
  //   .subscribe((data: Product[]) => {
  //     expect(data.length).toBe(17);
  // });

    // const req = httpTestingController.expectOne(test_url);
    // expect(req.request.method).toEqual('GET');
    // req.flush(mockProduct)
    // expect(testProducts).toBeDefined();
  });
});
