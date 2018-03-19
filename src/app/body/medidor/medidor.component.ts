import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-medidor',
  templateUrl: './medidor.component.html',
  styleUrls: ['./medidor.component.css']
})
export class MedidorComponent implements OnInit {

  constructor() { }

  @Input() porcentaje:Number;
  ngOnInit() {
  }

}
