import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
    apiKey='460bc8a633143aafc28f9325028ef131';
    url;
  constructor(private http: HttpClient) {
  this.url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  }
  
    getWeather(city,code){
        return this.http.get( this.url+city+','+code+'&APPID='+this.apiKey);
    }

}
