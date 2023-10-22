import { Component } from '@angular/core';
import { Persona } from '../personaInterface';


@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas:Persona[] = [
    { nombre: 'juan', edad: 20},
    { nombre: 'pedro', edad: 21},
    { nombre: 'diego', edad: 22},
    { nombre: 'moises', edad: 23},
    { nombre: 'claudio', edad: 24}
  ];

  dia:number = 0;
}
