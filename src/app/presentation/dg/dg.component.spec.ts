import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgComponent } from './dg.component';

describe('DgComponent', () => {
  let component: DgComponent;
  let fixture: ComponentFixture<DgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
