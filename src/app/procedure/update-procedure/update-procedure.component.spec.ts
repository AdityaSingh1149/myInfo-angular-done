import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProcedureComponent } from './update-procedure.component';

describe('UpdateProcedureComponent', () => {
  let component: UpdateProcedureComponent;
  let fixture: ComponentFixture<UpdateProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
