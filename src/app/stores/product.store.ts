import { observable, computed, action } from 'mobx-angular';
import { Product } from '../models/product';
import { products } from '../services/products';

export class ProductStore {

    @observable products: Product[];

    @action
    loadProducts() {
        // or injected service with the api call
        this.products = products;
    }

    @computed
    get allProducts(): Product[] {
        return this.products;
    }

}