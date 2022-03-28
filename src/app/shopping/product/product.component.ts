import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { DataService } from '../../service/data.service';
import { SORT } from '../../shared/Constant/constant';

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

  public istoggelGridListView = 'grid';
  public searchKey!: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.getSearchedValue();
  }

  getAllProduct(): void {
    this.isLoading = true;
    this.data.getAllProduct().subscribe((res: Product) => {
      this.productList = res;
      this.isLoading = false;
      this.filterData = this.productList;
      this.getMaxPrice();
    });
  }

  getSearchedValue() {
    this.data.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  getMaxPrice(): number {
    return this.rangeResult = Math.max.apply(Math, this.productList.map((o: Product) => { return o.price; }));
  }

  addToCart(productId: Number): void {
    let addToCart = this.productList.filter((item: Product) => {
      return item.id === productId;
    });
    this.data.addProductToCart(addToCart[0]);
  }

  sortProduct(event: any): Product {
    switch (event.target.value) {
      case SORT.High_rating:
        {
          this.sortByLowToHigh();
          break;
        }
      case SORT.High_price:
        {
          this.sortByHighToLow();
          break;
        }
      case SORT.Low_rating: {
        this.sortByLowhRating();
        break;
      }
      case SORT.High_rating: {
        this.sortByHighRating();
        break;
      }
      case SORT.Name:
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

  sortByLowToHigh(): Product {
    return this.productList = this.productList.sort((low: any, high: any) => {
      return low.price - high.price;
    });
  }
  sortByHighToLow(): Product {
    return this.productList = this.productList.sort((low: any, high: any) => {
      return high.price - low.price;
    });
  }

  sortByName(): Product {
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
  sortByHighRating() {
    return this.productList = this.productList.sort((low: any, high: any) => {
      return high.rating.rate - low.rating.rate;
    });
  }
  sortByLowhRating() {
    return this.productList = this.productList.sort((low: any, high: any) => {
      return low.rating.rate - high.rating.rate;
    });
  }
  rangeChange(event: Event): void {
    this.productList = this.filterData.filter((item: any) => {
      return item.price >= event;
    });
  }

  getCategory(event: Event): void {
    this.productList = event;
  }

  toggelGridListView(mode: string) {
    this.istoggelGridListView = mode;
  }
}
