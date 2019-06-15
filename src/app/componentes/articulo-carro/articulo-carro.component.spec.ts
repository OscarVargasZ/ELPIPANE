import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCarroComponent } from './articulo-carro.component';

describe('ArticuloCarroComponent', () => {
  let component: ArticuloCarroComponent;
  let fixture: ComponentFixture<ArticuloCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
