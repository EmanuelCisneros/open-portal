import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioModuloComponent } from './servicio-modulo.component';

describe('ServicioModuloComponent', () => {
  let component: ServicioModuloComponent;
  let fixture: ComponentFixture<ServicioModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
