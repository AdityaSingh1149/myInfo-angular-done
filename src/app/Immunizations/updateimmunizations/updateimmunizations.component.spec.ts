import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateimmunizationsComponent } from './updateimmunizations.component';

describe('UpdateimmunizationsComponent', () => {
  let component: UpdateimmunizationsComponent;
  let fixture: ComponentFixture<UpdateimmunizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateimmunizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateimmunizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
