import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {ProductsStore} from '../reducers/products.store';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private store: Store<{ products: ProductsStore }>) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = parseInt(params['id'], 0);
      this.store
        .pipe(select('products'))
        .subscribe(state => {
          this.product = state.filter(product => product.id === productId)[0];
        });
    });
  }

  addToCart() {
    // TODO - implement logic for cart state
  }
}
