import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotCheckComponent } from './slot-check/slot-check.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    SlotCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
