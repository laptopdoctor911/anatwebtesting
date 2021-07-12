import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anatweb404Component } from './anatweb404.component';

describe('Anatweb404Component', () => {
  let component: Anatweb404Component;
  let fixture: ComponentFixture<Anatweb404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anatweb404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anatweb404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
