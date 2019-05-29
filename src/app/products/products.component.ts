import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductStore } from '../stores/product.store';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() showNotifications: boolean;
  products: Product[] = [];

  constructor(private productsStore: ProductStore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.products = this.productsStore.allProducts;
    this.route.paramMap.subscribe(params =>
      this.showNotifications = JSON.parse(params.get('showNotifications'))
    )
  }


}
