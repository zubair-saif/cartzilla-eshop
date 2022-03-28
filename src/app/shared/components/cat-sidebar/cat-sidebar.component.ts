
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cat-sidebar',
  templateUrl: './cat-sidebar.component.html',
  styleUrls: ['./cat-sidebar.component.scss']
})
export class CatSidebarComponent implements OnInit {

  public catagoryList: any[] = [];
  public productList: any = [];
  public countCategory: any = {};
  @Input() inputMin = 0;
  @Input() inputMax: any;
  @Input() priceRange: any;
  @Output() rangeChange = new EventEmitter<any>();
  @Output() GetCategory = new EventEmitter<any>();
  searchTerm !: string;
  totalItem: number = 0;


  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllCategory().subscribe((res: any) => {
      this.catagoryList = res;
      this.catagoryList.push('All Products');
      this.catagoryList.sort();
    });
    this.getAllProducts();
  }

  isSelected(cat: any) {
    if (cat == 'All Products') {
      this.GetCategory.emit(this.productList);
    } else {
      this.data.getInCategory(cat).subscribe((res: any) => {
        this.GetCategory.emit(res);
      });
    }

  }

  onRangeChange(event: any) {
    this.rangeChange.emit(event.srcElement.value);
  }

  getAllProducts() {
    this.data.getAllProduct().subscribe((res: Product) => {
      this.productList = res;
      this.countCategories(this.productList);
    });
  }
  countCategories(product: any): void {
    this.countCategory = {};
    for (let i = 0; i < product.length; i++) {
      this.countCategory[product[i].category] = this.countCategory[product[i].category] ? this.countCategory[product[i].category] + 1 : 1;
    }
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.data.search.next(this.searchTerm);
  }
}

