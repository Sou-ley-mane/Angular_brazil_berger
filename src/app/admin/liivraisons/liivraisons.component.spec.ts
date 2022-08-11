import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiivraisonsComponent } from './liivraisons.component';

describe('LiivraisonsComponent', () => {
  let component: LiivraisonsComponent;
  let fixture: ComponentFixture<LiivraisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiivraisonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
