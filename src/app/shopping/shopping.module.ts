import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { GridViewComponent } from '../widget/grid-view/grid-view.component';
import { ListViewComponent } from '../widget/list-view/list-view.component';



@NgModule({
  declarations: [CartComponent, ProductComponent, ListViewComponent, GridViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BarRatingModule,
  ],
  exports: []
})
export class ShoppingModule { }
