import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';



const files = [
  TableModule,
  DropdownModule,
]

@NgModule({
  declarations: [],
  imports: [CommonModule, files],
  exports: [files],
})
export class AngularPrimengModule {}
