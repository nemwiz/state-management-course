export interface AggregatedProduct {
  id: number;
  name: string;
  qty: number;
  price: number;
}

export interface ShoppingCartStore {
  aggregatedProducts: AggregatedProduct[];
  totalPrice: number;
}
