import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childern',
  templateUrl: './childern.component.html',
  styleUrls: ['./childern.component.css']
})
export class ChildernComponent {

  @Input() title?: string

  @Output() titleChange = new EventEmitter <string>()


  emitirCambios () {
    console.log("cambio el titulo");
    this.titleChange.emit(this.title)
  }

}
