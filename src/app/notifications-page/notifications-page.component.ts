import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notifications } from '../services/notifications';
import { NotificationService } from '../services/notification.service';
import { NotificationType } from '../models/notificationType';

@Component({
  selector: 'notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {

  @Input() typeOfNotification: number;

  constructor(private route: ActivatedRoute, private notificationService: NotificationService) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params =>
        this.typeOfNotification = parseInt(params.get('typeOfNotification'))
    )
  }

  markAsRead(notificationId: number) {
    this.notificationService.removeNotification(notificationId);
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
      case 0: return notifications.filter(n => n.type === NotificationType.MESSAGE);
      case 1: return notifications.filter(n => n.type === NotificationType.PRODUCT);
      case 3: return notifications;
    }
  }

}
