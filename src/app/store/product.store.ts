import { CartItem } from './../models/cartItem';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';
@Injectable()
export class ProductStore {
 @observable products: Product[] = [];
 @observable cartItems: CartItem[] = [];

 @action
 setProducts(products: Product[]) {
   this.products = products;
 }

 @action
 addCartItem(product: Product) {
   const cartItem = this.cartItems.find(i => i.product.id === product.id);
   if (!cartItem) {
     const item = new CartItem();
     item.product = product;
     item.quantity = 1;
     this.cartItems.push(item);
   } else {
    //  const newCartItem = cartItem[0];
    //  newCartItem.quantity++;
    //  this.cartItems.splice(0, 1, newCartItem);
    cartItem.quantity++;
   }
 }

 @computed
 get TotalCount() {
  const num =  this.cartItems.map(item => item.quantity).reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
  console.log('count', num);
  return num;

 }


 @computed
 get totalSum() {
  return this.cartItems.reduce((total, currentValue) => {
    return total + currentValue.product.price * currentValue.quantity;
  }, 0);
 }

 @computed
 get allProducts() {
  return this.products;
 }
}
