import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverToComponent } from './deliver-to.component';

describe('DeliverToComponent', () => {
  let component: DeliverToComponent;
  let fixture: ComponentFixture<DeliverToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
