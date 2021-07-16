import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'weatherReport/:cityId',
    component: WeatherReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
