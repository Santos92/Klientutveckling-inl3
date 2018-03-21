import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-bottom-footer',
  templateUrl: './bottom-footer.component.html',
  styleUrls: ['./bottom-footer.component.css']
})
export class BottomFooterComponent implements OnInit {

  weather:any;

  constructor(private weatherService: WeatherService) {
	  }

  ngOnInit() {
    this.weatherService.getWeather('Stockholm','se').subscribe( (data) =>{
    console.log(data);
    this.weather=data;
    });
  }

  
}
