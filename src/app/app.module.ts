import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/login/login/login.component';
import { ListProductsComponent } from './feature/products/list-products/list-products.component';
import { ProductComponent } from './feature/products/product/product.component';
import { PromotionComponent } from './feature/products/promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProductsComponent,
    ProductComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
