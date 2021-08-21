import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    SliderModule,
  ],
  exports: [AccordionModule, TooltipModule]
})
export class ShareModuleModule { }
