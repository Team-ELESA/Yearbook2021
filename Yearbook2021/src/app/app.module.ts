import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SEComponent } from './se/se.component';
import { TEComponent } from './te/te.component';
import { BEComponent } from './be/be.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SEComponent,
    TEComponent,
    BEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
