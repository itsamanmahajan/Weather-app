import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weather } from './weather';

@Injectable(
  {
    providedIn:'root'
  }
)
export class WeatherService {
  private lat:number;
  private long :number;

  set(a,b)
  {
    this.lat=a;
    this.long=b;
  }

  constructor(private h:HttpClient) { }


  private url:string="https://api.open-meteo.com/v1/forecast?latitude=";


  get():Observable<weather>
  {
return this.h.get<weather>(this.url+this.lat+"&longitude="+this.long+"&hourly=relativehumidity_2m&hourly=weathercode&current_weather=true");
  }

}