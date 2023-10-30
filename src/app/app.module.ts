import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { BotonerComponent } from './botoner/botoner.component';
import { FormComponent } from './form/form.component';
import { BuclesComponent } from './bucles/bucles.component';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchComponent } from './switch/switch.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { ChildernComponent } from './childern/childern.component';
import { AddMsjComponent } from './add-msj/add-msj.component';
import { ListMsjComponent } from './list-msj/list-msj.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';



const routes:Routes = [
  {
    path:'botones',
    component: BotonerComponent
  },
  {
    path:'Bucles',
    component: BuclesComponent
  },
  {
    path:'AddMsj',
    component: AddMsjComponent
  },
  {
    path: '**',
    component:PaginaNoEncontradaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    BotonerComponent,
    FormComponent,
    BuclesComponent,
    FormPlantillaComponent,
    SwitchComponent,
    FormReactivoComponent,
    ChildernComponent,
    AddMsjComponent,
    ListMsjComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, //PARA TRABAJAR CON FORMULARIOS REACTIVOS
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
