import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherforcastingService {

  constructor(private http: HttpClient) { 

  }

  getcityWeather(cityId){
    let url = 'http://api.openweathermap.org/data/2.5/weather?appid=3d8b309701a13f65b660fa2c64cdc517&q='+cityId;
    return this.http.get(url);
  }
}
