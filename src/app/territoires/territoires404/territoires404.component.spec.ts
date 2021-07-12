import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Territoires404Component } from './territoires404.component';

describe('Territoires404Component', () => {
  let component: Territoires404Component;
  let fixture: ComponentFixture<Territoires404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Territoires404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Territoires404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
