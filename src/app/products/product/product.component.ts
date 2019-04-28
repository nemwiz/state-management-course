import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {Router} from '@angular/router';
import {ShoppingCartStore} from '../../shopping-cart.store';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router, private shoppingCartStore: ShoppingCartStore) {
  }

  ngOnInit(): void {
  }

  navigateToProductDetails() {
    this.router.navigateByUrl(`products/${this.product.id}`);
  }

  addToCart(product: Product) {
    this.shoppingCartStore.addProductToCart(product);
  }
}
