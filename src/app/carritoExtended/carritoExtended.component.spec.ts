import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoExtendedComponent } from './carritoExtended.component';

describe('CarritoComponent', () => {
  let component: CarritoExtendedComponent;
  let fixture: ComponentFixture<CarritoExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});