import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnadtComponent } from './pnadt.component';

describe('PnadtComponent', () => {
  let component: PnadtComponent;
  let fixture: ComponentFixture<PnadtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnadtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnadtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
