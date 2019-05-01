import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProductService} from '../../services/product.service';
import {AddAllProducts} from '../products.action';

export const LOAD_ALL_MOVIES_EFFECT = 'LOAD_ALL_MOVIES_EFFECT';

@Injectable()
export class ProductsEffect {

  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {
  }

  @Effect()
  loadProducts$ = this.actions$
    .pipe(
      ofType(LOAD_ALL_MOVIES_EFFECT),
      mergeMap(() => this.productsService.getProducstAsync()
        .pipe(
          map(products => (new AddAllProducts({products: products})),
          catchError(() => EMPTY)
        ))
    ));

}
