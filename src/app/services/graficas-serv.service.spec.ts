import { TestBed } from '@angular/core/testing';

import { GraficasServService } from './graficas-serv.service';

describe('GraficasServService', () => {
  let service: GraficasServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficasServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
