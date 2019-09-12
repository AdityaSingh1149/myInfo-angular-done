import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProcedureComponent } from './get-procedure.component';

describe('GetProcedureComponent', () => {
  let component: GetProcedureComponent;
  let fixture: ComponentFixture<GetProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
