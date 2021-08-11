import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = environment.apiUrl;
  public cartItem: any = [];
  public $product = new Subject();

  constructor(private http: HttpClient) { }

  
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
  removeItemFromCheckOut(productId: number): void {
    this.cartItem.map((item: Product, index: number) => {
      if (item.id === productId) {
        this.cartItem.splice(index, 1);

      }
    });
    localStorage.setItem('cart', JSON.stringify(this.cartItem));
    return this.$product.next(this.cartItem);
  }

  getTotalPrice() {
    return this.cartItem.reduce((total: number, item: { price: number; }) => total + item.price, 0);
  }

  getAllProduct(): Observable<any> {
    return this.http.get<Product>(`${this.baseUrl}/products`)
  }
  getAllCategory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/categories`);
  }
  getInCategory(type:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/category/${type}`);
  }
  getSingleProduct(id:number){
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }
}
