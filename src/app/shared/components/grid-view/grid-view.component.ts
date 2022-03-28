import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  public p: number = 1;
  @Input() productList: any;
  @Input() searchKey: any;
  @Output() additems: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: number) {
    this.additems.emit(item);
  }
}
