import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private g: Geolocation) {
    this.g.getCurrentPosition((gg) => {
      console.log(gg);
    });
  }
}
