import { Component, OnInit } from '@angular/core';
import { NotificationStore } from '../stores/notification.store';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.css']
})
export class SidebarNavigationComponent implements OnInit {

  constructor(private notificationStore: NotificationStore) { }

  ngOnInit() {
  }

  get productNotifications() {
    return this.notificationStore.productNotifications.length;
  }

  get messageNotifications() {
    return this.notificationStore.messageNotifications.length;
  }
}
