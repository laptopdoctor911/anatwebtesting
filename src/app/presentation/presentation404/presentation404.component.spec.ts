import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Presentation404Component } from './presentation404.component';

describe('Presentation404Component', () => {
  let component: Presentation404Component;
  let fixture: ComponentFixture<Presentation404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Presentation404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Presentation404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
