import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcniComponent } from './ocni.component';

describe('OcniComponent', () => {
  let component: OcniComponent;
  let fixture: ComponentFixture<OcniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
