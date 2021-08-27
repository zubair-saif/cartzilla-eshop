import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    SliderModule,
  ],
  exports: [AccordionModule, TooltipModule, NgxPaginationModule, RouterModule]
})
export class ShareModuleModule { }
