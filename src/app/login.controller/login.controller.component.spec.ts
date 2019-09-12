import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login.ControllerComponent } from './login.controller.component';

describe('Login.ControllerComponent', () => {
  let component: Login.ControllerComponent;
  let fixture: ComponentFixture<Login.ControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login.ControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login.ControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
