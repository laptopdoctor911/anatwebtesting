import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Senegal404Component } from './senegal404.component';

describe('Senegal404Component', () => {
  let component: Senegal404Component;
  let fixture: ComponentFixture<Senegal404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Senegal404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Senegal404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
