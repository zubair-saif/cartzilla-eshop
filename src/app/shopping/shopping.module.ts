import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { ShareModuleModule } from '../share-module/share-module.module';
import { CatSidebarModule } from '../shared/cat-sidebar/cat-sidebar.module';
import { ProductComponent } from './product/product.component';
import { GridViewComponent } from '../widget/grid-view/grid-view.component';
import { ListViewComponent } from '../widget/list-view/list-view.component';



@NgModule({
  declarations: [CartComponent, ProductComponent, ListViewComponent, GridViewComponent],
  imports: [
    CommonModule,
    ShareModuleModule,
    CatSidebarModule,
    BarRatingModule,
    ShareModuleModule
  ],
  exports: []
})
export class ShoppingModule { }
