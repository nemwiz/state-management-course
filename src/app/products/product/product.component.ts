import { AppStore } from '../../models/app-store';
import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { AddToCart } from 'src/app/store/actions/product-actions';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router, private store: Store<AppStore>) {
  }

  ngOnInit(): void {
  }

  navigateToProductDetails() {
    this.router.navigateByUrl(`products/${this.product.id}`);
  }

  addToCart() {
    this.store.dispatch(new AddToCart({product: this.product}));
  }
}
