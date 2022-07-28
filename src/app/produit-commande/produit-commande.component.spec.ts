import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCommandeComponent } from './produit-commande.component';

describe('ProduitCommandeComponent', () => {
  let component: ProduitCommandeComponent;
  let fixture: ComponentFixture<ProduitCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
