import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  openAlertSuccess: boolean = false
  openAlertDanger: boolean = false

  mostrar_en_consola(name:string) {

    if (name.length > 0  ) {

      console.log(name)

      this.openAlertSuccess  = true
      this.openAlertDanger = false

    } else {

      this.openAlertSuccess  = false
      this.openAlertDanger = true

    }


  }

}
