import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  public p: number = 1;
  @Input() productList: any;
  @Output() additems: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(item: number) {
    this.additems.emit(item);
  }
}
