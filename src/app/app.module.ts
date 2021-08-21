import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { NavbarsComponent } from './shared/navbars/navbars.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderTotalComponent } from './shared/order-total/order-total.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ShareModuleModule } from './share-module/share-module.module';
import { CatSidebarModule } from './shared/cat-sidebar/cat-sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ListViewComponent } from './widget/list-view/list-view.component';
import { GridViewComponent } from './widget/grid-view/grid-view.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    NavbarsComponent,
    FooterComponent,
    JumbotronComponent,
    CheckoutComponent,
    OrderTotalComponent,
    ProductDetailsComponent,
    ListViewComponent,
    GridViewComponent,
    ContactComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ShareModuleModule,
    CatSidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
