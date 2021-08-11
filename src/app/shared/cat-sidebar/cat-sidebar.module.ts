import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from 'src/app/share-module/share-module.module';
import { CatSidebarComponent } from './cat-sidebar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CatSidebarComponent],
  imports: [
    CommonModule,
    ShareModuleModule,
    FormsModule
  ],
  exports:[CatSidebarComponent]
})
export class CatSidebarModule { }
