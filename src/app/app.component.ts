import { Component, VERSION } from '@angular/core';
import { Abs } from './abs';
import { weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  a!:Navigator;
lat:number;
long:number;
weather:weather;
bool:boolean=false;

  constructor(private gg:Abs,private h:WeatherService) {
  

    
  navigator.geolocation.getCurrentPosition((gi)=>
  {
    this.bool=true;
    this.lat=gi.coords.latitude;
    this.long=gi.coords.longitude;
    // alert("wusi")
    console.log(gi);
    console.log(this.a)

    this.h.set(this.lat,this.long);
  
     this.abcd();
  })
  
  }
  abcd() {
    this.h.get().subscribe((o)=>
    {
      this.weather=o;
      console.log(o)
    },(error)=>
    {
      console.log(error);
    })

  
  }
}
