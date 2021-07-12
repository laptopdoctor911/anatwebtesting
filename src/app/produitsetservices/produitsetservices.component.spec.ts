import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsetservicesComponent } from './produitsetservices.component';

describe('ProduitsetservicesComponent', () => {
  let component: ProduitsetservicesComponent;
  let fixture: ComponentFixture<ProduitsetservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsetservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsetservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
