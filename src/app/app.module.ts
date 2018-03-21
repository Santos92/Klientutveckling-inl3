import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { AsideContentComponent } from './aside-content/aside-content.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomFooterComponent,
    AsideContentComponent,
	routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbYeBwav-dAx6lv68CTelWch99G8xl1Z0'
    }),
	AgmDirectionModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
