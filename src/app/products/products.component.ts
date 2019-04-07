import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router, private productsService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  navigateToProductDetails(productId: number) {
    this.router.navigateByUrl(`products/${productId}`);
  }

}
