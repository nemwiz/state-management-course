import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  ngOnInit(): void {
  }
}
