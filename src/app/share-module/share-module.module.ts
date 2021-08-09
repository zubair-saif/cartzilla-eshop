import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports:[AccordionModule]
})
export class ShareModuleModule { }
