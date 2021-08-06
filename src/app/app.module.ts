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
import { CatSidebarComponent } from './shared/cat-sidebar/cat-sidebar.component';

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
    CatSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
