import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipe/filter.pipe';
import { CatSidebarComponent } from './components/cat-sidebar/cat-sidebar.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { NavbarsComponent } from './components/navbars/navbars.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { ProductListComponent } from '../home/home.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';

@NgModule({
  declarations: [
    FilterPipe,
    CatSidebarComponent,
    OrderTotalComponent,
    NavbarsComponent,
    FooterComponent,
    JumbotronComponent,
    ProductListComponent,
    ListViewComponent,
    GridViewComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule,
    SliderModule,
    TooltipModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    BarRatingModule,
  ],
  exports: [
    AccordionModule,
    TooltipModule,
    NgxPaginationModule,
    RouterModule,
    FilterPipe,
    SliderModule,
    NavbarsComponent,
    FooterComponent,
    CatSidebarComponent,
    FormsModule,
    OrderTotalComponent,
    BarRatingModule,
    ListViewComponent,
    GridViewComponent,
  ],
})
export class SharedModule { }
