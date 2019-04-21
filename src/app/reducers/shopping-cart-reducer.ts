import {ActionsUnion, ActionTypes} from './products.action';
import {AggregatedProduct, ShoppingCartStore} from './shopping-cart.store';
import {Product} from '../models/product';

export const shoppingCartReducer = (state: ShoppingCartStore = {aggregatedProducts: [], totalPrice: 0.0}, action: ActionsUnion) => {

  switch (action.type) {
    case ActionTypes.ADD_PRODUCTS_TO_CART:

      let aggregatedProducts = [];

      if (isProductAlreadyInTheCart(action.payload.product, state.aggregatedProducts)) {
        aggregatedProducts = state.aggregatedProducts.map((product) => {
          if (product.name === action.payload.product.name) {
            const qty = product.qty + 1;
            return Object.assign(product, {qty: qty, price: action.payload.product.price * qty});
          }
          return product;
        });
      } else {
        const newAggregatedProduct = {name: action.payload.product.name, qty: 1, price: action.payload.product.price};
        aggregatedProducts = [...state.aggregatedProducts, newAggregatedProduct];
      }
      return {aggregatedProducts: aggregatedProducts, totalPrice: calculateTotalPrice(aggregatedProducts)};
    default:
      return state;
  }

};


const isProductAlreadyInTheCart = (product: Product, allProducts: AggregatedProduct[]): boolean => {
  return allProducts.filter(p => p.name === product.name).length !== 0;
};

const calculateTotalPrice = (allProducts: AggregatedProduct[]): number => {
  return allProducts
    .map(product => product.price)
    .reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
};
