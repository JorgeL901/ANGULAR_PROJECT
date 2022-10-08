import { TestBed } from '@angular/core/testing';

import { EgresoIngresoServService } from './egreso-ingresp-serv.service';

describe('EgresoIngrespServService', () => {
  let service: EgresoIngresoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgresoIngresoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
