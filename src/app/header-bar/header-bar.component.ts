import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  userNotifications = 1;
  shoppingCartItems: number;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.shoppingCartItems = 3;
  }

  get allNotifications() {
    return this.notificationService.messageNotificationNumber + this.notificationService.productNotificationNumber;
  }
}
