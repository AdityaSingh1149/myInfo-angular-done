import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefamilyhistoryComponent } from './updatefamilyhistory.component';

describe('UpdatefamilyhistoryComponent', () => {
  let component: UpdatefamilyhistoryComponent;
  let fixture: ComponentFixture<UpdatefamilyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefamilyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefamilyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
