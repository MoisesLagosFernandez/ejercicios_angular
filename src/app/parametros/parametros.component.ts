import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent {

  parametroRescatado?: string

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.parametroRescatado = params['parametro']);
  }

}
