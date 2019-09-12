import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicationComponent } from './updatemedication.component';

describe('UpdatemedicationComponent', () => {
  let component: UpdatemedicationComponent;
  let fixture: ComponentFixture<UpdatemedicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemedicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
