import { MarkAsRead } from './../store/actions/notification-actions';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationType} from '../models/notificationType';
import { Notification } from '../models/notifications';
import { Store } from '@ngrx/store';

@Component({
  selector: 'notifications-box',
  templateUrl: './notifications-box.component.html',
  styleUrls: ['./notifications-box.component.css']
})
export class NotificationsBoxComponent implements OnInit {
  notifications: Notification[];
  @Input() typeOfNotification: string;

  constructor(private route: ActivatedRoute, private store: Store<any>) {
  }

  ngOnInit() {
     this.store.select('notifications').subscribe( (notifications: Notification[]) => {
       this.notifications = notifications;
       console.log(notifications);
     });
  }

  markAsRead(notificationId: number) {
    this.store.dispatch(new MarkAsRead({id: notificationId}));
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
    switch (this.typeOfNotification) {
      case '0':
        return this.notifications.filter(n => n.type === NotificationType.MESSAGE);
      case '1':
        return this.notifications.filter(n => n.type === NotificationType.PRODUCT);
      default:
        return this.notifications;
    }
  }

}
