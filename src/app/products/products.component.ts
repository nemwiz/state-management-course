import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() showNotifications: boolean;
  products: Product[] = [];

  constructor(private productsService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.route.paramMap.subscribe(params =>
      this.showNotifications = JSON.parse(params.get('showNotifications'))
    )
  }


}
