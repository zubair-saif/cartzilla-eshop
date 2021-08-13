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
  public rangeResult = 0;
  public filterData: any;
  p: number = 1;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.isLoading = true;
    this.data.getAllProduct().subscribe((res: Product) => {
      this.productList = res;
      this.isLoading = false;
      this.filterData = this.productList;
    });
  }

  getMaxPrice() {
    return this.rangeResult = Math.max.apply(Math, this.productList.map((o: any) => { return o.price; }));
  }

  addToCart(productId: Number) {
    let addToCart = this.productList.filter((item: Product) => {
      return item.id === productId;
    });
    this.data.addProductToCart(addToCart[0]);
  }

  sortProduct(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.sortByLowToHigh();
          break;
        }

      case "High":
        {
          this.sortByHighToLow();
          break;
        }

      case "Name":
        {
          this.sortByName();
          break;
        }

      default: {
        this.sortByLowToHigh();
        break;
      }

    }
    return this.productList
  }

  sortByLowToHigh() {
    return this.productList = this.productList.sort((low: any, high: any) => low.price - high.price);
  }
  sortByHighToLow() {

    return this.productList = this.productList.sort((low: any, high: any) => high.price - low.price);
  }

  sortByName() {
    return this.productList = this.productList.sort((low: any, high: any) => {
      if (low.title < high.title) {
        return -1;
      }
      else if (low.title > high.title) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }

  rangeChange(event: any) {
    this.productList = this.filterData.filter((item: any) => {
      return item.price >= event;
    });
  }

  getCategory(event: any) {
    this.productList = event;
  }
}
