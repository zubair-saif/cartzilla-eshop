import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './home/home.component';
import { NavbarsComponent } from './shared/navbars/navbars.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { OrderTotalComponent } from './shared/order-total/order-total.component';

import { CatSidebarModule } from './shared/cat-sidebar/cat-sidebar.module';
import { ProductDetailsComponent } from './shopping/product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ShareModuleModule } from './share-module/share-module.module';
import { CheckoutFormComponent } from './widget/checkout-form/checkout-form.component';
import { BarRatingModule } from "ngx-bar-rating";

import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarsComponent,
    FooterComponent,
    JumbotronComponent,
    OrderTotalComponent,
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
    BarRatingModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
