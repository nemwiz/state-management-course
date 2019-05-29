import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import { ProductStore } from '../stores/product.store';
import { ShoppingCartStore } from '../shopping-cart.store';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productStore: ProductStore,
    private shoppingCartStore: ShoppingCartStore) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = parseInt(params['id'], 0);
      this.product = this.productStore.allProducts.find(x => x.id === productId);
    });
  }

  addToCart() {
    this.shoppingCartStore.addProductToCart(this.product);
  }
}
