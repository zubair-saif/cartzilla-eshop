import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './products/cart/cart.component';
import { CheckoutComponent } from './products/checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { CheckoutFormComponent } from './widget/checkout-form/checkout-form.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-details', component: CheckoutFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
