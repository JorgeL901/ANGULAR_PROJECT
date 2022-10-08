import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoIngresoCompComponent } from './egreso-ingreso-comp.component';

describe('EgresoIngresoCompComponent', () => {
  let component: EgresoIngresoCompComponent;
  let fixture: ComponentFixture<EgresoIngresoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgresoIngresoCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgresoIngresoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
