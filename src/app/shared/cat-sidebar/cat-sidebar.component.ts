import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-sidebar',
  templateUrl: './cat-sidebar.component.html',
  styleUrls: ['./cat-sidebar.component.scss']
})
export class CatSidebarComponent implements OnInit {
  rangeValues: number[] = [20,80];
  constructor() { }

  ngOnInit(): void {
  }

}
