import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    SliderModule
  ],
  exports:[AccordionModule]
})
export class ShareModuleModule { }
