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
  public rangeResult: number = 0;
  p: number = 1;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getAllProduct().subscribe((res: Product) => {
      this.productList = res;
      this.isLoading = false;
      this.rangeResult = Math.max.apply(Math, this.productList.map(function (o: any) { return o.price; }));
    })
  }
  addToCart(productId: Number) {
    let addToCart = this.productList.filter((item: Product) => {
      return item.id === productId;
    });
    this.data.addProductToCart(addToCart[0]);
  }
  isProductSort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.productList = this.productList.sort((low: any, high: any) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.productList = this.productList.sort((low: any, high: any) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.productList = this.productList.sort((low: any, high: any) => {
            if (low.title < high.title) {
              return -1;
            }
            else if (low.title > high.title) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.productList = this.productList.sort((low: any, high: any) => low.price - high.price);
        break;
      }

    }
    return this.productList
  }
  rangeChange(event: any) {
    this.productList = this.productList.filter((item: any) => {

      return item.price <= event;
    })
  }
  GetCategory(event: any) {
    this.productList = event;
  }
}
