import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererLivraisonComponent } from './gerer-livraison.component';

describe('GererLivraisonComponent', () => {
  let component: GererLivraisonComponent;
  let fixture: ComponentFixture<GererLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
