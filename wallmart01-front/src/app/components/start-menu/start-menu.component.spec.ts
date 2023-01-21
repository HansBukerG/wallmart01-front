import {HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';

import { StartMenuComponent } from './start-menu.component';

describe('StartMenuComponent', () => {
  let component: StartMenuComponent;
  let fixture: ComponentFixture<StartMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ StartMenuComponent,SaleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
