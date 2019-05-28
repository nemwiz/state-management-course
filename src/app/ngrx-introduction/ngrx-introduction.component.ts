import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {User} from '../models/user';
import {ChangeFirstName, ChangeLastName} from '../store/actions/change-user-name';

@Component({
  selector: 'ngrx-introduction',
  templateUrl: './ngrx-introduction.component.html',
  styleUrls: ['./ngrx-introduction.component.css']
})
export class NgrxIntroductionComponent implements OnInit {

  firstName;
  lastName;


  constructor(private store: Store<User>) {
    this.store.select('user')
      .subscribe((user: User) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
      });
  }

  ngOnInit() {
  }

  updateFirstName(newFirstName: string) {
    this.store.dispatch(new ChangeFirstName({firstName: newFirstName}));
  }

  updateLastName(newLastName: string) {
    this.store.dispatch(new ChangeLastName({lastName: newLastName}));
  }
}
