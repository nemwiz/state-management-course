import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Notification } from '../models/notifications';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  notifications: Notification[];
  userNotifications = 1;
  shoppingCartItems: number;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.shoppingCartItems = 3;
    this.store.select('notifications').subscribe( (notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }

  get allNotifications() {
    return this.notifications.length;
  }
}
