import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  // nombre:string = 'Jhon Sandoval';

  // persona:Persona = {
  //   nombre: 'Jhon Sandoval',
  //   edad: 38
  // }

  numero: number = 1;

  decrementar() {
    this.numero--;
  }

  incrementar() {
    this.numero += 1;
  }
}
