import {Injectable} from '@angular/core';
import {products} from './products';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Product[] {
    return products;
  }

  getProduct(productId: number): Product {
    return products.filter(product => product.id === productId)[0];
  }

  getProducstAsync(): Observable<Product[]> {
    return this.http.get<Product[]>('http://www.mocky.io/v2/5cc95d2b310000db0c12ccb1');
  }

}
