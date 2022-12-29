import { Component, VERSION } from '@angular/core';
import { Abs } from './abs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  a!:Navigator;

  constructor(private gg:Abs) {
  
  navigator.geolocation.getCurrentPosition((gi)=>
  {
    alert("wusi")
    console.log(gi);
    console.log(this.a)
  })
  
  }
  abcd() {


  
  }
}
