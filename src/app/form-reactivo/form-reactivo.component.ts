import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {

  constructor(private fb: FormBuilder){

  }

  formUser = this.fb.group({
    'name': ['', Validators.required],
    'email':['', [Validators.required, Validators.email]]
  })



/*
formUser = new FormGroup({
  'name' : new FormControl('', Validators.required),
  'email': new FormControl('', [Validators.required, Validators.email])
})
*/


get name(){
  return this.formUser.get('name') as FormControl  // permite no enviar null (te ahorras el '?')
}

get email(){
  return this.formUser.get('email')
}

procesar(){
  console.log(this.formUser.value);

}


}
