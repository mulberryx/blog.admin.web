import { TestBed, inject } from '@angular/core/testing';

import { InterfacesService } from './interfaces.service';

describe('InterfacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterfacesService]
    });
  });

  it('should be created', inject([InterfacesService], (service: InterfacesService) => {
    expect(service).toBeTruthy();
  }));
});
