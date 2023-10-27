import { Component } from '@angular/core';
import { MsjService } from '../msj.service';
@Component({
  selector: 'app-list-msj',
  templateUrl: './list-msj.component.html',
  styleUrls: ['./list-msj.component.css']
})
export class ListMsjComponent {

  constructor(public msjService: MsjService) {}


}
