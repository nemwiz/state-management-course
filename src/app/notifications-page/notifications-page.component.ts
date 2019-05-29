import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationType } from '../models/notificationType';
import { NotificationStore } from '../stores/notification.store';

@Component({
  selector: 'notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {

  @Input() typeOfNotification: number;

  constructor(private route: ActivatedRoute, private notificationStore: NotificationStore) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params =>
        this.typeOfNotification = parseInt(params.get('typeOfNotification'))
    )
  }

  markAsRead(notificationId: number) {
    this.notificationStore.removeNotification(notificationId);
  }

  getNotificationIcon(notificationType: NotificationType) {
    switch (notificationType) {
      case NotificationType.MESSAGE:
        return 'envelope.svg';
      case NotificationType.PRODUCT:
        return 'file.svg';
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
      default:
        return '';
    }
  }

  get notificationsData() {
    switch(this.typeOfNotification) {
      case 0: return this.notificationStore.messageNotifications;
      case 1: return this.notificationStore.productNotifications;
      case 3: return this.notificationStore.allNotifications;
    }
  }

}
