import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from 'src/app/share-module/share-module.module';
import { CatSidebarComponent } from './cat-sidebar.component';


@NgModule({
  declarations: [CatSidebarComponent],
  imports: [
    CommonModule,
    ShareModuleModule,
  ],
  exports:[CatSidebarComponent]
})
export class CatSidebarModule { }
