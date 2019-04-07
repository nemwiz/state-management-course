import {Injectable} from '@angular/core';
import {products} from './products';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Product[] {
    return products;
  }

  getProduct(productId: number): Product {
    return products.filter(product => product.id === productId)[0];
  }

}
