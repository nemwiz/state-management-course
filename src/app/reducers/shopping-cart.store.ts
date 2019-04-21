export interface AggregatedProduct {
  name: string;
  qty: number;
  price: number;
}

export interface ShoppingCartStore {
  aggregatedProducts: AggregatedProduct[];
  totalPrice: number;
}
