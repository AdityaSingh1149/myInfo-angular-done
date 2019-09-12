import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesocialhistoryComponent } from './updatesocialhistory.component';

describe('UpdatesocialhistoryComponent', () => {
  let component: UpdatesocialhistoryComponent;
  let fixture: ComponentFixture<UpdatesocialhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesocialhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesocialhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
