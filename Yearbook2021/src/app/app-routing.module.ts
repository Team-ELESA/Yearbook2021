import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SEComponent } from './se/se.component';
import { TEComponent } from './te/te.component';
import { BEComponent } from './be/be.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'se', component: SEComponent },
  { path: 'te', component: TEComponent },
  { path: 'be', component: BEComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
