
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cat-sidebar',
  templateUrl: './cat-sidebar.component.html',
  styleUrls: ['./cat-sidebar.component.scss']
})
export class CatSidebarComponent implements OnInit {
  
  public catagoryList: any[] = [];
  @Input() inputMin = 0;
  @Input() inputMax:any;
  @Input() priceRange:any;
  @Output() rangeChange = new EventEmitter<any>();
  @Output() GetCategory=new EventEmitter<any>();
  public productList: any = [];
  public countCategory:any={};
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllCategory().subscribe((res: any) => {
      this.catagoryList = res;
    });
    this.getAllProducts();
  }

  isSelected(cat: any) {
    this.data.getInCategory(cat).subscribe((res: any) => {
      this.GetCategory.emit(res);
    });
  }
  
  onRangeChange(event: any) {
    this.rangeChange.emit(event.srcElement.value);
  }

  getAllProducts() {
    this.data.getAllProduct().subscribe((res: Product) => {
      this.productList = res;
      this.countCategory={};
      for (var i = 0; i < this.productList.length; i++) {
        this.countCategory[this.productList[i].category] = this.countCategory[this.productList[i].category] ? this.countCategory[this.productList[i].category] + 1 : 1;
      }
      console.log(this.countCategory);
    });
  }
}
