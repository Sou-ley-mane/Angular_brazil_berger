import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesCommandeComponent } from './gestion-des-commande.component';

describe('GestionDesCommandeComponent', () => {
  let component: GestionDesCommandeComponent;
  let fixture: ComponentFixture<GestionDesCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
