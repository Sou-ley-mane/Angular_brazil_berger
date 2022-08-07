import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriteMenuComponent } from './frite-menu.component';

describe('FriteMenuComponent', () => {
  let component: FriteMenuComponent;
  let fixture: ComponentFixture<FriteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriteMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
