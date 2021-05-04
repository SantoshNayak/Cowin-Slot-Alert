import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotCheckComponent } from './slot-check/slot-check.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SlotCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
