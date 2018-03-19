import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class BodyService {
  public API = 'http://first-firstproject.1d35.starter-us-east-1.openshiftapps.com/';
  public api2 = 'api/car/ryg';

  constructor(public _httpClient: HttpClient) {}
  getLastPosicionamiento(id) {
    console.log({id:id});
    return this._httpClient.post(this.API + this.api2,
      {id:id},httpOptions);
  }
}
