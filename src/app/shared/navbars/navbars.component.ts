import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {
  public cartProductCount: number = 0;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getProductsCount().subscribe(res => {
      this.cartProductCount = res.length;
    })
  }

}
