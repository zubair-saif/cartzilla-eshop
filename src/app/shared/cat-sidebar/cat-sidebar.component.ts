import { Component, OnInit } from '@angular/core';
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
      // this.getIncategory(this.catagoryList);
    });
  }
 
  // getIncategory(cat:any){
  //   for(let i=0;cat.length>0;i++){
  //     this.data.getInCategory(cat[i]).subscribe((res: any) => {
  //       console.log(res)
  //     });
  //   }
  // }
}
