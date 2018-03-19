import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class CarroModels{
  _id:String;
  placa:String;
  posisionamientos:[PosisionamientoModels];
}
export class PosisionamientoModels{
  "_id" : String;
  "lat" : Number;
  "lng" : Number;
  "porcentajeCombustible" : Number;
  "hora" : Date;
}
