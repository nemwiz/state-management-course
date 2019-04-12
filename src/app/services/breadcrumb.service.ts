import {Injectable} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {

  constructor(private router: Router) {
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
      // TODO: Map lower level routes
      // TODO: Fetch product name from store to avoid fetching from a service
      return 'Not mapped';
  }
}


