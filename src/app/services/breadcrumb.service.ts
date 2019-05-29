import { ProductStore } from './../store/product.store';
import {Injectable} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {

  constructor(private router: Router, private store: ProductStore) {
  }

  routeChanges(): Observable<string> {
    return new Observable((observer) => {
        this.router.events
        .subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                return observer.next(this.MapRouteToBreadcrumbItem(event.urlAfterRedirects));
            }

            return EMPTY;
        });
    });
  }

  private MapRouteToBreadcrumbItem(route: string): string {
      if (route === '/products') {
        return 'Products';
      }
      const productiId = route.substring(route.lastIndexOf('/') + 1);
      // TODO: Map lower level routes
      // TODO: Fetch product name from store to avoid fetching from a service
      console.log(route);
      console.log(productiId);
      console.log(this.store.allProducts);
      return this.store.allProducts.find(p => p.id.toString() === productiId).name;
  }
}


