export class PosicionamientoAndRuteModels{
  _id: String;
  ultimaRuta: Ruta;
  ultimaGasolina: Gasolina;

  constructor(id: String, ultimaRuta: Ruta, ultimaGasolina: Gasolina) {
    this._id = id;
    this.ultimaRuta = ultimaRuta;
    this.ultimaGasolina = ultimaGasolina;
  }
}
export class Gasolina{
  porcentaje:Number;
  fecha: Date;
  _id: String;
}
export class Ruta{
  lat: number;
  lng: number;
  fecha: Date;
  _id: String;

  constructor(lat: number, lng: number, fecha: Date, id: String) {
    this.lat = lat;
    this.lng = lng;
    this.fecha = fecha;
    this._id = id;
  }
}
