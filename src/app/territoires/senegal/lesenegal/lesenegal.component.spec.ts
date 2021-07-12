import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenegalComponent } from './lesenegal.component';

describe('LesenegalComponent', () => {
  let component: LesenegalComponent;
  let fixture: ComponentFixture<LesenegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesenegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesenegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
