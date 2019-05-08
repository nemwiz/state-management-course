import {ProductActionsUnion, ActionTypes} from './products.action';
import {AggregatedProduct, ShoppingCartStore} from './shopping-cart.store';
import {Product} from '../models/product';

export const shoppingCartReducer = (state: ShoppingCartStore = {aggregatedProducts: [], totalPrice: 0.0}, action: ProductActionsUnion) => {

  switch (action.type) {
    case ActionTypes.ADD_PRODUCTS_TO_CART:

      let aggregatedProducts = [];

      if (isProductAlreadyInTheCart(action.payload.product, state.aggregatedProducts)) {
        aggregatedProducts = state.aggregatedProducts.map((product) => {
          if (product.id === action.payload.product.id) {
            const qty = product.qty + 1;
            return Object.assign(product, {qty: qty, price: action.payload.product.price * qty});
          }
          return product;
        });
      } else {
        const newAggregatedProduct = {
          id: action.payload.product.id,
          name: action.payload.product.name,
          qty: 1,
          price: action.payload.product.price
        };
        aggregatedProducts = [...state.aggregatedProducts, newAggregatedProduct];
      }
      return {aggregatedProducts: aggregatedProducts, totalPrice: calculateTotalPrice(aggregatedProducts)};

    case ActionTypes.DELETE_PRODUCT:
      aggregatedProducts = state.aggregatedProducts;
      const index = aggregatedProducts.findIndex(p => p.id === action.id);
      aggregatedProducts.splice(index, 1);
      return {aggregatedProducts: aggregatedProducts, totalPrice: calculateTotalPrice(aggregatedProducts)};;
    default:
      return state;
  }

};


const isProductAlreadyInTheCart = (product: Product, allProducts: AggregatedProduct[]): boolean => {
  return allProducts.filter(p => p.id === product.id).length !== 0;
};

const calculateTotalPrice = (allProducts: AggregatedProduct[]): number => {
  return allProducts
    .map(product => product.price)
    .reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
};
