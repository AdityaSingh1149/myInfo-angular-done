import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconditionComponent } from './updatecondition.component';

describe('UpdateconditionComponent', () => {
  let component: UpdateconditionComponent;
  let fixture: ComponentFixture<UpdateconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
