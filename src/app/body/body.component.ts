import { Component, OnInit } from '@angular/core';
import {BodyService} from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _bodyService:BodyService) { }
  porcentajeDeGasolina=0;
  lat="warrencitopa";
  ngOnInit() {
    this.consultarEstado("5aaae11f40744f1d08b6d2b5");
  }
  aumentar(){
    this.lat=this.lat+"w";
  }
  public consultarEstado(id:String ) {
    this._bodyService.getLastPosicionamiento(id)
      .subscribe({
        next: (data) => {
          console.log("agregado correctamente",data);
        },
        error: (err) => {
          console.error("error",err);
        },
        complete: () => {
          console.log("consultando de nuevo");

          this.consultarEstado(id);
        }
      });
  }
}
