import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobxIntroductionComponent } from './mobx-introduction.component';

describe('MobxIntroductionComponent', () => {
  let component: MobxIntroductionComponent;
  let fixture: ComponentFixture<MobxIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobxIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobxIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
