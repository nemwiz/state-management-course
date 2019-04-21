import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AggregatedProduct, ShoppingCartStore} from '../reducers/shopping-cart.store';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: AggregatedProduct[];
  totalPrice: number;

  constructor(private store: Store<{ shoppingCart: ShoppingCartStore }>) {
    store
      .pipe(select('shoppingCart'))
      .subscribe(state => {
        this.products = state.aggregatedProducts;
        this.totalPrice = state.totalPrice;
      });
  }

  ngOnInit() {
  }
}
