import { Injectable } from '@angular/core';
import { Abs } from './abs';

@Injectable({ providedIn: 'root' })
export class AService extends Abs {
  constructor() {
    super();
  }
  clearWatch(watchId: number): void {
    throw new Error('Method not implemented.');
  }
  getCurrentPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback,
    options?: PositionOptions
  ): void {
    console.log(successCallback);

    // throw new Error('Method not implemented.');
  }
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback,
    options?: PositionOptions
  ): number {
    throw new Error('Method not implemented.');
  }
}
