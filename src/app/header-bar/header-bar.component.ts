import {Component, OnInit} from '@angular/core';
import {ShoppingCartStore} from '../shopping-cart.store';
import { NotificationStore } from '../stores/notification.store';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  userNotifications = 1;
  shoppingCartItems: number;

  constructor(private notificationStore: NotificationStore,
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
    return this.notificationStore.allNotifications.length;
  }
}
