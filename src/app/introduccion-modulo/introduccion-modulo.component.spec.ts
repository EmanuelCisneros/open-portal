import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionModuloComponent } from './introduccion-modulo.component';

describe('IntroduccionModuloComponent', () => {
  let component: IntroduccionModuloComponent;
  let fixture: ComponentFixture<IntroduccionModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
