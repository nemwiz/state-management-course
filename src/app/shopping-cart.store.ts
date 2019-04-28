import {Injectable} from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {Product} from './models/product';

export interface AggregatedProduct {
  id: number;
  name: string;
  qty: number;
  price: number;
}

@Injectable()
export class ShoppingCartStore {

  @observable products: AggregatedProduct[] = [];

  @computed get totalPrice(): number {
    return this.products
      .map(product => product.price)
      .reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
  }

  @action addProductToCart(product: Product) {
    if (isProductAlreadyInTheCart(product, this.products)) {
      const selectedProduct = this.products.find(p => p.id === product.id);
      selectedProduct.qty = selectedProduct.qty + 1;
      selectedProduct.price = product.price * selectedProduct.qty;
    } else {
      this.products.push({id: product.id, qty: 1, name: product.name, price: product.price});
    }
  }
}

const isProductAlreadyInTheCart = (product: Product, allProducts: AggregatedProduct[]): boolean => {
  return allProducts.filter(p => p.id === product.id).length !== 0;
};
