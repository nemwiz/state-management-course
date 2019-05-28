import { ShopingCartItem } from './../models/shoping-cart-item';
import { AddToCart, ActionTypes, DeleteFromCart } from './actions/product-actions';

export const ProductReducer = (state: ShopingCartItem[] = [],  action: AddToCart | DeleteFromCart ) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const productsItem = state.filter(i => i.product.id === action.payload.product.id);
      if (productsItem.length === 0) {
        const item = new ShopingCartItem();
        item.product = action.payload.product;
        item.quantity = 1;
        return [...state, item];
      }
      productsItem[0].quantity++;
      return [...state];
      case ActionTypes.DELETE_FROM_CART:
        return state.filter(i => i.product.id !== action.payload.id);
      default:
        return state;
  }
};
