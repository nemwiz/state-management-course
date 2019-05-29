import { ProductStore } from './../store/product.store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent implements OnInit {

  userNotifications = 1;
  shoppingCartItems: number;

  constructor(private notificationService: NotificationService, private store: ProductStore) { }

  ngOnInit() {
  }

  get allNotifications() {
    return this.notificationService.messageNotificationNumber + this.notificationService.productNotificationNumber;
  }
}
