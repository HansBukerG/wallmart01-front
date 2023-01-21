import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDepthDetailComponent } from '../product-depth-detail/product-depth-detail.component';

import { SaleDetailComponent } from './sale-detail.component';

describe('SaleDetailComponent', () => {
  let component: SaleDetailComponent;
  let fixture: ComponentFixture<SaleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDetailComponent,ProductDepthDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
