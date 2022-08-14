import { TestBed } from '@angular/core/testing';

import { GestionsDesUtilisateursService } from './gestions-des-utilisateurs.service';

describe('GestionsDesUtilisateursService', () => {
  let service: GestionsDesUtilisateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionsDesUtilisateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
