import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxIntroductionComponent } from './ngrx-introduction.component';

describe('NgrxIntroductionComponent', () => {
  let component: NgrxIntroductionComponent;
  let fixture: ComponentFixture<NgrxIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
