import {Action} from '@ngrx/store';
import {Product} from '../models/product';

export enum ActionTypes {
  ADD_PRODUCTS_TO_CART = 'ADD_PRODUCTS_TO_CART',
  ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS',
  DELETE_PRODUCT = 'DELETE_PRODUCT'
}

export class AddProductsToCart implements Action {
  readonly type = ActionTypes.ADD_PRODUCTS_TO_CART;

  constructor(public payload: { product: Product }) {}
}

export class AddAllProducts implements Action {
  readonly type = ActionTypes.ADD_ALL_PRODUCTS;

  constructor(public payload: { products: Product[] }) {}
}

export class DeleteProductAction implements Action {
  readonly type = ActionTypes.DELETE_PRODUCT;

  constructor(public id: number) {}
}


export type ProductActionsUnion = AddProductsToCart | AddAllProducts | DeleteProductAction;
