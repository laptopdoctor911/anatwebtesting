import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outils404Component } from './outils404.component';

describe('Outils404Component', () => {
  let component: Outils404Component;
  let fixture: ComponentFixture<Outils404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Outils404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Outils404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
