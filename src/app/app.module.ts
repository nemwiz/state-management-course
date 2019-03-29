import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { ProductComponent } from 'src/app/products/product/product.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';


const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SidebarNavigationComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
