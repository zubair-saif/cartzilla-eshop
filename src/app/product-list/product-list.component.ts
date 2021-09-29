import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: any = [];
  public isLoading: boolean = false;
  public p: number = 1;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.isLoading = true;
    this.data.getAllProduct().subscribe((res: Product) => {
      this.productList = res;
      console.log(res);
      this.isLoading = false;
      
    });
  }

  addToCart(productId: Number) {
    let addToCart = this.productList.filter((item: Product) => {
      return item.id === productId;
    });
    this.data.addProductToCart(addToCart[0]);
  }

}
