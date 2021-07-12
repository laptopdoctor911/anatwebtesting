import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosrealisationsComponent } from './nosrealisations.component';

describe('NosrealisationsComponent', () => {
  let component: NosrealisationsComponent;
  let fixture: ComponentFixture<NosrealisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosrealisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosrealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
