import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId = 1; // TODO - Mock data

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToProductDetails() {
    this.router.navigateByUrl(`products/${this.productId}`);
  }
}
