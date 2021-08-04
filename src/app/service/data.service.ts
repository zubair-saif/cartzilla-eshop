import { Injectable, } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product } from '../shared/product';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public cartItem: any = [];
  public $product = new Subject();

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/products`);
  }
  addProductToCart(item: Product) {
    this.cartItem.push(item);
    this.$product.next(this.cartItem);
   localStorage.setItem('cart', JSON.stringify(this.cartItem))
  }
  getProductsCount(): Observable<any> {
    return this.$product.asObservable();
  }
}
