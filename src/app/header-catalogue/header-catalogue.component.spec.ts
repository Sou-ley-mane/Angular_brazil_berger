import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCatalogueComponent } from './header-catalogue.component';

describe('HeaderCatalogueComponent', () => {
  let component: HeaderCatalogueComponent;
  let fixture: ComponentFixture<HeaderCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
