import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarousselComponent } from './karoussel.component';

describe('KarousselComponent', () => {
  let component: KarousselComponent;
  let fixture: ComponentFixture<KarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarousselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
