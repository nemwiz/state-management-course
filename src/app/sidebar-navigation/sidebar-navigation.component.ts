import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Notification } from '../models/notifications';
import { NotificationType } from '../models/notificationType';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.css']
})
export class SidebarNavigationComponent implements OnInit {
  notifications: Notification[];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('notifications').subscribe( (notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }

  get productNotifications() {
   return this.notifications.filter(n => n.type === NotificationType.PRODUCT).length;
  }

  get messageNotifications() {
   return this.notifications.filter(n => n.type === NotificationType.MESSAGE).length;
  }
}
