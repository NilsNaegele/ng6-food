import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarRatingComponent } from './dollar-rating.component';

describe('DollarRatingComponent', () => {
  let component: DollarRatingComponent;
  let fixture: ComponentFixture<DollarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
