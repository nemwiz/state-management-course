import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';

@Component({
  selector: 'performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

  changeProduct() {
    this.products[4].name = 'ChangeDetectionJs';
  }


}
