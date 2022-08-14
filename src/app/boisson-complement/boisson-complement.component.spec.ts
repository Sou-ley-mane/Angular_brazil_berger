import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonComplementComponent } from './boisson-complement.component';

describe('BoissonComplementComponent', () => {
  let component: BoissonComplementComponent;
  let fixture: ComponentFixture<BoissonComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonComplementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
