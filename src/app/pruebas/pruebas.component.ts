import { Component } from '@angular/core';
import { Persona } from '../personaInterface';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {


  persona:Persona = {
    nombre: 'asd',
    edad: 12
  }
}

