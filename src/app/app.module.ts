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
import {StoreModule} from '@ngrx/store';
import {shoppingCartReducer} from './reducers/shopping-cart-reducer';
import {productsReducer} from './reducers/products.reducer';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffect} from './reducers/effects/products.effect';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'notifications-page', component: NotificationsPageComponent },
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
    NotificationsPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([ProductsEffect]),
    StoreModule.forRoot({ shoppingCart: shoppingCartReducer, products: productsReducer }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
