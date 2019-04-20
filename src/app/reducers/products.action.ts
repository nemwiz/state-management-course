import {Action} from '@ngrx/store';
import {Product} from '../models/product';

export enum ActionTypes {
  ADD_PRODUCTS_TO_CART = 'ADD_PRODUCTS_TO_CART',
}

export class AddProductsToCart implements Action {
  readonly type = ActionTypes.ADD_PRODUCTS_TO_CART;

  constructor(public payload: { product: Product }) {}
}


export type ActionsUnion = AddProductsToCart;
