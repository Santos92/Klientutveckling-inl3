import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.css']
})
export class FindUsComponent implements OnInit {
	lat = 32.666452;
	lng = -16.890102;
	zoom = 13;
	dir = undefined;
	
	options = {
	  suppressMarkers: false,
	  draggable: false,
};
	
  constructor() { }

  ngOnInit() {
  }
    getDirection($event) {
	var selectedMode = (<HTMLInputElement>document.getElementById('mode')).value;
		this.dir = {
		  origin: { lat: $event.coords.lat, lng: $event.coords.lng },
		  destination: { lat: 32.666452, lng: -16.890102 },
		  travelMode: google.maps.TravelMode[selectedMode],
		}
	}
}
