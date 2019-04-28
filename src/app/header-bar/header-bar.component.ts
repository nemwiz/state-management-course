import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../services/notification.service';
import {ShoppingCartStore} from '../shopping-cart.store';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  userNotifications = 1;
  shoppingCartItems: number;

  constructor(private notificationService: NotificationService,
              private shoppingCartStore: ShoppingCartStore) {
  }

  ngOnInit() {
  }

  getTotalItems() {
    this.shoppingCartItems = this.shoppingCartStore.products
      .map(product => product.qty)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  get allNotifications() {
    return this.notificationService.messageNotificationNumber + this.notificationService.productNotificationNumber;
  }
}
