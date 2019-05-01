import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AddProductsToCart} from '../../reducers/products.action';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router,
              private store: Store<{}>) {
  }

  ngOnInit(): void {
  }

  navigateToProductDetails() {
    this.router.navigateByUrl(`products/${this.product.id}`);
  }

  addToCart(product: Product) {
    this.store.dispatch(new AddProductsToCart({product}));
  }
}
