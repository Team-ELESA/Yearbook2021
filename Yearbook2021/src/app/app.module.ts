import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SEComponent } from './se/se.component';
import { TEComponent } from './te/te.component';
import { BEComponent } from './be/be.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DevsComponent } from './devs/devs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SEComponent,
    TEComponent,
    BEComponent,
    HeaderComponent,
    FooterComponent,
    DevsComponent
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
