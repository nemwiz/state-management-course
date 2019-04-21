import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ShoppingCartStore} from '../reducers/shopping-cart.store';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  userNotifications = 1;
  shoppingCartItems: number;

  constructor(private store: Store<{ shoppingCart: ShoppingCartStore }>) {
    store
      .pipe(select('shoppingCart'))
      .subscribe(state => {
        this.shoppingCartItems = state.aggregatedProducts
          .map(product => product.qty)
          .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
      });
  }

  ngOnInit() {
    setInterval(() => {
      this.userNotifications++;
    }, 3000);
  }

}
