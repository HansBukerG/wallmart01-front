import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepthDetailComponent } from './product-depth-detail.component';

describe('ProductDepthDetailComponent', () => {
  let component: ProductDepthDetailComponent;
  let fixture: ComponentFixture<ProductDepthDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDepthDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDepthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
