import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productList: any = [];
  public isLoading: boolean = false;
  p: number = 1;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getAllProduct().subscribe((res: Product) => {
      this.productList = res;
      this.isLoading = false;
    })
  }
  addToCart(productId: Number) {
    let addToCart = this.productList.filter((item: Product) => {
      return item.id === productId;
    });
    this.data.addProductToCart(addToCart[0]);
  }
}
