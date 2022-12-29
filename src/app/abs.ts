export  abstract class Abs implements Geolocation {
  constructor()
  {
    
  }
 abstract clearWatch(watchId: number): void ;
abstract getCurrentPosition(successCallback: PositionCallback,errorCallback?: PositionErrorCallback,options?: PositionOptions): void ;
abstract watchPosition(successCallback: PositionCallback,errorCallback?: PositionErrorCallback,options?: PositionOptions): number ;



}