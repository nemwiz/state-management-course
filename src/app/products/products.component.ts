import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductStore } from '../store/product.store';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() showNotifications: boolean;
  // products: Product[] = [];

  constructor(private productsService: ProductService, private route: ActivatedRoute, private store: ProductStore) {
  }

  ngOnInit() {
    this.productsService.getProducstAsync().subscribe(
      products => this.store.setProducts(products)
    );
    this.route.paramMap.subscribe(params =>
      this.showNotifications = JSON.parse(params.get('showNotifications'))
    );
  }


}
