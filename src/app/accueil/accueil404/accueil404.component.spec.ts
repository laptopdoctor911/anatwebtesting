import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueil404Component } from './accueil404.component';

describe('Accueil404Component', () => {
  let component: Accueil404Component;
  let fixture: ComponentFixture<Accueil404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accueil404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Accueil404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
