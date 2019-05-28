import { DeleteFromCart } from './../store/actions/product-actions';
import { ShopingCartItem } from './../models/shoping-cart-item';
import { AppStore } from './../models/app-store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: ShopingCartItem[];
  total: number;
  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.store.select('products').subscribe( (products: ShopingCartItem[]) => {
      this.products = products;
      this.total = products.reduce((total, currentValue) => {
        return total + currentValue.product.price * currentValue.quantity;
      }, 0);
    });
  }

  deleteProduct(id: number) {
    this.store.dispatch(new DeleteFromCart({id}));
  }

}
