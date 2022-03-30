import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public getParam: any;
  public productList: any;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.getRouteData();
  }

  ngOnInit(): void {
    this.getSingleProduct();
  }

  private getSingleProduct() {
    this.data.getSingleProduct(this.getParam).subscribe((res: any) => {
      this.productList = res;
    });
  }

  private getRouteData(): void {
    this.route.params.subscribe(res => {
      this.getParam = res['id'];
    });
  }

}
