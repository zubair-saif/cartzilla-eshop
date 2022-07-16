import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product';
import { API_ENDPOINT } from '../shared/Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = environment.apiUrl;
  public cartItem: any = [];
  public $product = new Subject();
  public search = new BehaviorSubject<string>("");
  public cartData: any = [];

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.http.get<Product>(`${this.baseUrl}${API_ENDPOINT.PRODUCTS}`)
  }

  getAllCategory(): Observable<any> {
    return this.http.get(`${this.baseUrl}${API_ENDPOINT.PRODUCT_CATEGORIES}`);
  }

  getInCategory(type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${API_ENDPOINT.PRODUCT_CATEGORY}${type}`);
  }

  getSingleProduct(id: number) {
    return this.http.get(`${this.baseUrl}${API_ENDPOINT.PRODUCTS}${id}`);
  }

  addProductToCart(item: Product): void {
    this.cartItem.push(item);
    this.$product.next(this.cartItem);
    localStorage.setItem('cart', JSON.stringify(this.cartItem));
  }

  getProductsCount(): Observable<any> {
    return this.$product.asObservable();
  }

  getCart(): Product[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');

  }

  getTotalPrice(): number {
    return this.cartItem.reduce((total: number, item: { price: number; }) => total + item.price, 0);
  }

  removeItemFromCheckOut(productId: number): void {
    this.cartItem.map((item: Product, index: number) => {
      if (item.id === productId) {
        this.cartItem.splice(index, 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.cartItem));
    return this.$product.next(this.cartItem);
  }

  addToCart(pid: any, qty: string | number, replace: string) {
    console.log(pid, qty, replace)
    if (this.cartData[pid] == undefined) {
      this.cartData[pid] = 0;
    }
    if (replace === '') {
      this.cartData[pid] = this.cartData[pid] + qty;
    } else {
      this.cartData[pid] = parseInt(qty.toString());
    }

    if (this.cartData[pid] == 0) {
      delete this.cartData[pid];
    }
    // this.storeItems();
    console.log(this.cartData)
  }


}
