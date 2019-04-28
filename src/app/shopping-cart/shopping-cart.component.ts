import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ShoppingCartStore} from '../shopping-cart.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartStore: ShoppingCartStore) { }

  ngOnInit() {
  }

}
