import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class NavbarsComponent implements OnInit {
  public cartProductCount: number = 0;

  constructor(private data: DataService, @Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void {
    this.data.getProductsCount().subscribe(res => {
      this.cartProductCount = res.length;
    })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    if (window.pageYOffset > 400) {
      this.document.getElementById('navbar')?.classList.add('sticky');
    } else {
      this.document.getElementById('navbar')?.classList.remove('sticky');

    }
  }
}
