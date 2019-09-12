import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialhistoryComponent } from './socialhistory.component';

describe('SocialhistoryComponent', () => {
  let component: SocialhistoryComponent;
  let fixture: ComponentFixture<SocialhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
