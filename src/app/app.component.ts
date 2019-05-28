import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { InitNotifications } from './store/actions/notification-actions';
import { notifications } from './services/notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'state-management-course';

  constructor(private store: Store<any>) {
  }
  ngOnInit(): void {
    this.store.dispatch(new InitNotifications({notifications: notifications}));
  }
}
