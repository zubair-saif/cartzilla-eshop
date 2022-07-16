import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public checkoutProduct: any = [];
  public total: any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.total = this.data.getTotalPrice();
    this.checkoutProduct = this.data.getCart();
    this.getProductsCounts();
  }

  getProductsCounts(): void {
    this.data.getProductsCount().subscribe((res: any) => {
      this.total = this.data.getTotalPrice();
      this.checkoutProduct = res;

    });
  }

  removeItem(productId: number): void {
    this.data.removeItemFromCheckOut(productId);
  }

  changeQty(pid: any, qty: string | number, replace: any) {
    if (qty !== '') {
      qty = parseInt(qty.toString()) || 1;
      this.data.addToCart(pid, qty, replace);
    } else {
      this.data.addToCart(pid, 1, replace);
    }

  }

}
