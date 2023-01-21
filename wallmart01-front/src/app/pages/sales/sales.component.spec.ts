import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartMenuComponent } from 'src/app/components/start-menu/start-menu.component';

import { SalesComponent } from './sales.component';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesComponent, StartMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
