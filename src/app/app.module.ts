import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotCheckComponent } from './slot-check/slot-check.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularPrimengModule } from './shared/modules/angular-primeng/angular-primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    SlotCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   
    BrowserAnimationsModule,
    FormsModule,
    AngularPrimengModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
