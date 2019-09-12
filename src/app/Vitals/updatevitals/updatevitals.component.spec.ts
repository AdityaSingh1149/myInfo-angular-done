import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevitalsComponent } from './updatevitals.component';

describe('UpdatevitalsComponent', () => {
  let component: UpdatevitalsComponent;
  let fixture: ComponentFixture<UpdatevitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
