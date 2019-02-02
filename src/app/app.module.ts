import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Class AppComponent from app.component
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from "./core/core.module";

@NgModule({
  //importierte HTML Tags.
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CustomersModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  //show the first Component in the UI
  bootstrap: [AppComponent]
})
export class AppModule { }
