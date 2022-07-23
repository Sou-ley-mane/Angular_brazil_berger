import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreCatalogueComponent } from './filtre-catalogue.component';

describe('FiltreCatalogueComponent', () => {
  let component: FiltreCatalogueComponent;
  let fixture: ComponentFixture<FiltreCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
