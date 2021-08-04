import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public checkoutProduct: any = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.checkoutProduct = localStorage.getItem('cart');
    console.log(JSON.parse(this.checkoutProduct))
    this.data.getProductsCount().subscribe(res => {
      this.checkoutProduct = res;
      console.log(res)
    })
  }

}
