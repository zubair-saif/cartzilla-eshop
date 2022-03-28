import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutFormComponent } from './widget/checkout-form/checkout-form.component';
import { BarRatingModule } from "ngx-bar-rating";

import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ContactComponent,
    BlogComponent,
    CheckoutFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BarRatingModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
