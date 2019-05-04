import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'dummy-product',
  templateUrl: './dummy-product.component.html',
  styleUrls: ['./dummy-product.component.css']
})
export class DummyProductComponent implements OnInit {

  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

  get productName() {
    console.log(`Dummy product with product id ${this.product.id} has changed.`);
    return this.product.name;
  }

}
