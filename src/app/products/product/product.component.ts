import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {Router} from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToProductDetails() {
    this.router.navigateByUrl(`products/${this.product.id}`);
  }

  addToCart() {
    // TODO - implement logic for cart state
  }
}
