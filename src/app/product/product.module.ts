import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';
import { ProductComponent } from './product.component';
import { GridViewComponent } from '../widget/grid-view/grid-view.component';
import { ListViewComponent } from '../widget/list-view/list-view.component';
import { CatSidebarModule } from '../shared/cat-sidebar/cat-sidebar.module';

@NgModule({
  declarations: [ProductComponent, ListViewComponent, GridViewComponent],
  imports: [
    CommonModule,
    ShareModuleModule,
    CatSidebarModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }