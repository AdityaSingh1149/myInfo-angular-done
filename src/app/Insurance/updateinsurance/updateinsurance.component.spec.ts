import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinsuranceComponent } from './updateinsurance.component';

describe('UpdateinsuranceComponent', () => {
  let component: UpdateinsuranceComponent;
  let fixture: ComponentFixture<UpdateinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
