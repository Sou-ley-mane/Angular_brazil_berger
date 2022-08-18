import { TestBed } from '@angular/core/testing';

import { GestionDesLivraisonsService } from './gestion-des-livraisons.service';

describe('GestionDesLivraisonsService', () => {
  let service: GestionDesLivraisonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDesLivraisonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
