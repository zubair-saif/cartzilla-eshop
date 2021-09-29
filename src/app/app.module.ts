import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { NavbarsComponent } from './shared/navbars/navbars.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderTotalComponent } from './shared/order-total/order-total.component';

import { CatSidebarModule } from './shared/cat-sidebar/cat-sidebar.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProductModule } from './product/product.module';
import { ShareModuleModule } from './share-module/share-module.module';
import { CheckoutFormComponent } from './widget/checkout-form/checkout-form.component';
import { BarRatingModule } from "ngx-bar-rating";
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    NavbarsComponent,
    FooterComponent,
    JumbotronComponent,
    CheckoutComponent,
    OrderTotalComponent,
    ProductDetailsComponent,
    ContactComponent,
    BlogComponent,
    CheckoutFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModuleModule,
    CatSidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    ProductModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
