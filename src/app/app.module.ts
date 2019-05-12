import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { ProductComponent } from 'src/app/products/product/product.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
import {ProductService} from './services/product.service';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { BreadcrumbComponent } from './header-bar/breadcrumb/breadcrumb.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { PerformanceComponent } from './performance/performance.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DummyProductComponent } from './performance/components/dummy-product/dummy-product.component';
import { NgrxIntroductionComponent } from './ngrx-introduction/ngrx-introduction.component';
import { FirstNameComponent } from './shared/first-name/first-name.component';
import { LastNameComponent } from './shared/last-name/last-name.component';
import {StoreModule} from '@ngrx/store';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'notifications-page', component: NotificationsPageComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'ngrx-intro', component: NgrxIntroductionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SidebarNavigationComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    BreadcrumbComponent,
    NotificationsPageComponent,
    PerformanceComponent,
    DummyProductComponent,
    NgrxIntroductionComponent,
    FirstNameComponent,
    LastNameComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(null),
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
