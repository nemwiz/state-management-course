import {Product} from '../models/product';
import {ActionsUnion, ActionTypes} from './products.action';

export const productsReducer = (state: Product[] = [], action: ActionsUnion) => {

  switch (action.type) {
    case ActionTypes.ADD_PRODUCTS_TO_CART:
      return [...state, action.payload.product];
    default:
      return state;
  }

};
