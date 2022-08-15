import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBurgerComponent } from './ajouter-burger.component';

describe('AjouterBurgerComponent', () => {
  let component: AjouterBurgerComponent;
  let fixture: ComponentFixture<AjouterBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
