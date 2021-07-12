import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Realisations404Component } from './realisations404.component';

describe('Realisations404Component', () => {
  let component: Realisations404Component;
  let fixture: ComponentFixture<Realisations404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Realisations404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Realisations404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
