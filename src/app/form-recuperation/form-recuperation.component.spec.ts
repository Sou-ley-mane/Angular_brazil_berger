import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecuperationComponent } from './form-recuperation.component';

describe('FormRecuperationComponent', () => {
  let component: FormRecuperationComponent;
  let fixture: ComponentFixture<FormRecuperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecuperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecuperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
