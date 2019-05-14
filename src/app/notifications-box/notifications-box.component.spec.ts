import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsBoxComponent } from './notifications-box.component';

describe('NotificationsBoxComponent', () => {
  let component: NotificationsBoxComponent;
  let fixture: ComponentFixture<NotificationsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
