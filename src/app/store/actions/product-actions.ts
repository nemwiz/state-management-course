import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART'
}

export class AddToCart implements Action {
  readonly type = ActionTypes.ADD_TO_CART;

  constructor(public payload: { product: Product}) {}
}

export class DeleteFromCart implements Action {
  readonly type = ActionTypes.DELETE_FROM_CART;

  constructor(public payload: { id: number}) {}
}
