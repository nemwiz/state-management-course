import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mobx-introduction',
  templateUrl: './mobx-introduction.component.html',
  styleUrls: ['./mobx-introduction.component.css']
})
export class MobxIntroductionComponent implements OnInit {

  firstName = 'John';
  lastName = 'Doe';

  constructor() {
  }

  ngOnInit() {
  }

  updateFirstName(newFirstName: string) {
    console.log('hello first name');
  }

  updateLastName(newLastName: string) {
    console.log('hello last name');
  }

}
