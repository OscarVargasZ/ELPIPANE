import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaArticuloComponent } from './pagina-articulo.component';

describe('PaginaArticuloComponent', () => {
  let component: PaginaArticuloComponent;
  let fixture: ComponentFixture<PaginaArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
