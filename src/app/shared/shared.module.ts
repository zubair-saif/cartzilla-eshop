import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CatSidebarComponent } from './components/cat-sidebar/cat-sidebar.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { NavbarsComponent } from './components/navbars/navbars.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [FilterPipe, CatSidebarComponent, OrderTotalComponent, NavbarsComponent, FooterComponent, JumbotronComponent],
  imports: [
    CommonModule,
    AccordionModule,
    SliderModule,
    FormsModule
  ],
  exports: [AccordionModule, TooltipModule, NgxPaginationModule, RouterModule, FilterPipe]
})
export class SharedModule { }
