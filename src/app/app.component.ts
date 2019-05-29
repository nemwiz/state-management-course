import { Component, OnInit } from '@angular/core';
import { NotificationStore } from './stores/notification.store';
import { ProductStore } from './stores/product.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'state-management-course';

  constructor(private notificationStore: NotificationStore, private productStore: ProductStore){

  }
  ngOnInit() {
    this.notificationStore.loadNotifications();
    this.productStore.loadProducts();
  }
}
