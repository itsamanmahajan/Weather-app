export class Hourly {
  time: string[];
  temperature_2m: number[];
}

export class HourlyUnits {
  temperature_2m: string;
}

export class CurrentWeather {
  time: string;
  temperature: number;
  weathercode: number;
  windspeed: number;
  winddirection: number;
}

export class weather {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  current_weather: CurrentWeather;
}
