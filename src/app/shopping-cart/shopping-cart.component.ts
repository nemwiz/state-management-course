import { CartItem } from './../models/cartItem';
import { ProductStore } from './../store/product.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  // cartItems: CartItem[];
  constructor(private store: ProductStore) { }

  ngOnInit() {
  }

  deleteProduct() {
    alert('deleted!');
  }

}
