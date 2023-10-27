import { Component } from '@angular/core';
import { MsjService } from '../msj.service';


@Component({
  selector: 'app-add-msj',
  templateUrl: './add-msj.component.html',
  styleUrls: ['./add-msj.component.css']
})
export class AddMsjComponent {

  constructor(public msjService: MsjService) {}

  message?: string


  enviarMsj(){
    this.msjService.add(this.message!)
    this.message = ''

  }

}
