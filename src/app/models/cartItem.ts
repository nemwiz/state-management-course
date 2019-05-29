import { Product } from './product';
import { observable } from 'mobx-angular';

export class CartItem {
  product: Product;
  @observable quantity: number;
}
