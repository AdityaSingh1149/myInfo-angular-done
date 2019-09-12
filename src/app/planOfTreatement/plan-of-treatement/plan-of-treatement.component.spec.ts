import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanOfTreatementComponent } from './plan-of-treatement.component';

describe('PlanOfTreatementComponent', () => {
  let component: PlanOfTreatementComponent;
  let fixture: ComponentFixture<PlanOfTreatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanOfTreatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanOfTreatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
