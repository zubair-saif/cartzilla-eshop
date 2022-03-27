import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../pipe/filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule,
    AccordionModule,
    SliderModule,
  ],
  exports: [AccordionModule, TooltipModule, NgxPaginationModule, RouterModule, FilterPipe]
})
export class ShareModuleModule { }
