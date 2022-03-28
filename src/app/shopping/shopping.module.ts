import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent, CartComponent, ProductComponent,],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: []
})
export class ShoppingModule { }
