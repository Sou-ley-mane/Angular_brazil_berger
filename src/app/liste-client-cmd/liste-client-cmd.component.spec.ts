import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientCmdComponent } from './liste-client-cmd.component';

describe('ListeClientCmdComponent', () => {
  let component: ListeClientCmdComponent;
  let fixture: ComponentFixture<ListeClientCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeClientCmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeClientCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
