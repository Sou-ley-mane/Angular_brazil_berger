import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreProduitComponent } from './cadre-produit.component';

describe('CadreProduitComponent', () => {
  let component: CadreProduitComponent;
  let fixture: ComponentFixture<CadreProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadreProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
