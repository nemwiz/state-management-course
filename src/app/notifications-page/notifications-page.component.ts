import {Component, OnInit} from '@angular/core';

enum NotificationType {
  MESSAGE,
  SETTINGS,
  PRODUCT
}

@Component({
  selector: 'notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {

  dummyNotifications = [
    {id: 1, type: NotificationType.MESSAGE},
    {id: 2, type: NotificationType.SETTINGS},
    {id: 3, type: NotificationType.PRODUCT},
    {id: 4, type: NotificationType.PRODUCT},
    {id: 5, type: NotificationType.MESSAGE},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  markAsRead(notificationId: number) {
    this.dummyNotifications = this.dummyNotifications.filter(notificaion => notificaion.id !== notificationId);
  }

  getNotificationIcon(notificationType: NotificationType) {
    switch (notificationType) {
      case NotificationType.MESSAGE:
        return 'envelope.svg';
      case NotificationType.PRODUCT:
        return 'file.svg';
      case NotificationType.SETTINGS:
        return 'settings.svg';
      default:
        return 'envelope.svg';
    }
  }

  getNotificationMessage(notificationType: NotificationType) {
    switch (notificationType) {
      case NotificationType.MESSAGE:
        return 'Your products have been shipped. Thank you for buying at the tech store.';
      case NotificationType.PRODUCT:
        return 'Hey there! A new JS framework is just out. Check it out on the products page!';
      case NotificationType.SETTINGS:
        return 'Something went wrong with your user settings. Please fill in the correct address.';
      default:
        return '';
    }
  }

}
