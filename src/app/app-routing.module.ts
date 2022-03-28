import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './shopping/cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './shopping/product-details/product-details.component';
import { ProductListComponent } from './home/home.component';
import { ProductComponent } from './shopping/product/product.component';
import { CheckoutFormComponent } from './shared/components/checkout-form/checkout-form.component';

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
