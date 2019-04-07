import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = parseInt(params['id'], 0);
      this.product = this.productService.getProduct(productId);
    });
  }

  addToCart() {
    // TODO - implement logic for cart state
  }
}
