import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cat-sidebar',
  templateUrl: './cat-sidebar.component.html',
  styleUrls: ['./cat-sidebar.component.scss']
})
export class CatSidebarComponent implements OnInit {
  @Input() inputMin = 0;
  @Input() inputMax = 1000;
  @Input() priceRange = 100;
  @Output() rangeChange = new EventEmitter<any>();
  @Output() GetCategory=new EventEmitter<any>();
  catagoryList: any[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.data.getAllCategory().subscribe((res: any) => {
      this.catagoryList = res;
    });
  }

  // getProduct() {
  //   this.data.getAllProduct().subscribe((res: any) => {

  //   })
  // }

  isSelected(cat: any) {
    this.data.getInCategory(cat).subscribe((res: any) => {
      this.GetCategory.emit(res);
    });
  }
  onRangeChange(event: any) {
    console.log(event.srcElement.value)
    this.rangeChange.emit(event.srcElement.value);
  }
}
