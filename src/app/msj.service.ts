import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsjService {

  msj: string[] = []

  add(msj:string){
    this.msj.push(msj)
  }

  constructor() { }
}
