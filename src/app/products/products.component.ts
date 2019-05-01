import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {ProductsStore} from '../reducers/products.store';
import {AddAllProducts} from '../reducers/products.action';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() showNotifications: boolean;
  products: Product[] = [];

  constructor(private productsService: ProductService,
              private route: ActivatedRoute,
              private store: Store<{ products: ProductsStore }>) {
    this.store
      .pipe(select('products'))
      .subscribe(state => {
        this.products = state;
      });
  }

  ngOnInit() {
    this.store.dispatch(new AddAllProducts({products: this.productsService.getProducts()}));

    this.route.paramMap.subscribe(params =>
      this.showNotifications = JSON.parse(params.get('showNotifications'))
    );
  }


}
