import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeodesieComponent } from './geodesie.component';

describe('GeodesieComponent', () => {
  let component: GeodesieComponent;
  let fixture: ComponentFixture<GeodesieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeodesieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeodesieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
