import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcartoComponent } from './appcarto.component';

describe('AppcartoComponent', () => {
  let component: AppcartoComponent;
  let fixture: ComponentFixture<AppcartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
