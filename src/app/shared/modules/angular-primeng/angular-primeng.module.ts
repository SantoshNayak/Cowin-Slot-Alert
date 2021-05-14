import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';



const files = [
  TableModule,
  DropdownModule,  
  ButtonModule,
  RadioButtonModule,
  SelectButtonModule
]

@NgModule({
  declarations: [],
  imports: [CommonModule, files],
  exports: [files],
})
export class AngularPrimengModule {}
