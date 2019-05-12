import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngrx-introduction',
  templateUrl: './ngrx-introduction.component.html',
  styleUrls: ['./ngrx-introduction.component.css']
})
export class NgrxIntroductionComponent implements OnInit {

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
