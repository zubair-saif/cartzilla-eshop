import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public checkoutProduct: any = [];
  public total: any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.total=this.data.getTotalPrice();
    this.checkoutProduct =this.data.getCart();
    this.data.getProductsCount().subscribe((res:any)=>{
      this.total=this.data.getTotalPrice();
      this.checkoutProduct=res;
      
    })
  }

  removeItem(productId: number) {
    this.data.removeItemFromCheckOut(productId);
  }

}
