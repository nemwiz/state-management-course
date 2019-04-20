import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Product} from '../models/product';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[];

  constructor(private store: Store<{ products: Product[] }>) {
     store.pipe(select('products'))
      .subscribe(products => {
        this.products = products;
      });
  }

  ngOnInit() {
  }

}
