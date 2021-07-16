import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherforcastingService } from '../weatherforcasting.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  cityId = '';
  weatherData;
  weatheDataSubscriber: Subscription;
  constructor(private weatherService: WeatherforcastingService,private _route: ActivatedRoute) { }

  getWeatherDetails(){
    this.weatheDataSubscriber = this.weatherService.getcityWeather(this.cityId).subscribe(
      resp=>{
        this.weatherData = resp;
      },
      err=>{
        alert('Something went wrong');
      }
    )
  }

  ngOnInit() {
    this._route.params.subscribe(
      (param: Params) => {
        if (param.cityId) {
          this.cityId = param.cityId;
          this.getWeatherDetails();
        }
      }
    )
  }

  ngOnDestroy() {
    this.weatheDataSubscriber ? this.weatheDataSubscriber.unsubscribe() : '';
  }

}
