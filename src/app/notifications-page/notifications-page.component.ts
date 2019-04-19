import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

enum NotificationType {
  MESSAGE = 0,
  PRODUCT = 1
}

@Component({
  selector: 'notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {

  @Input() typeOfNotification: number = 1;

  dummyNotifications = [
    {id: 1, type: NotificationType.MESSAGE},
    {id: 3, type: NotificationType.PRODUCT},
    {id: 4, type: NotificationType.PRODUCT},
    {id: 5, type: NotificationType.MESSAGE},
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params =>
        this.typeOfNotification = parseInt(params.get('typeOfNotification'))
    )
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

  get dummyNotificationsData() {
    return this.typeOfNotification === NotificationType.MESSAGE ?
      this.dummyNotifications.filter(n => n.type === NotificationType.MESSAGE) :
      this.dummyNotifications.filter(n => n.type === NotificationType.PRODUCT)
  }

}
