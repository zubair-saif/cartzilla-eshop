import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cat-sidebar',
  templateUrl: './cat-sidebar.component.html',
  styleUrls: ['./cat-sidebar.component.scss']
})
export class CatSidebarComponent implements OnInit {
  catagoryList: any[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
   
    this.data.getAllCategory().subscribe((res: any) => {
      this.catagoryList = res;
    });
  }

  isSelected(cat: any) {
    this.data.getInCategory(cat).subscribe((res: any) => {
      console.log(res);
    });
  }
}
