import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateplanoftreatementComponent } from './updateplanoftreatement.component';

describe('UpdateplanoftreatementComponent', () => {
  let component: UpdateplanoftreatementComponent;
  let fixture: ComponentFixture<UpdateplanoftreatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateplanoftreatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateplanoftreatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
