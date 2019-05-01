import {Product} from '../models/product';
import {ActionTypes, ProductActionsUnion} from './products.action';

export const productsReducer = (state: Product[] = [], action: ProductActionsUnion) => {

  switch (action.type) {
    case ActionTypes.ADD_ALL_PRODUCTS:
      return action.payload.products;
    default:
      return state;
  }

};
