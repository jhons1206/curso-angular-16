import { Component } from '@angular/core';

import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas: Persona[] = [
    { nombre: 'Jeremy', "edad": 4 },
    { nombre: 'Nicol', "edad": 14 },
    { nombre: 'Romy', "edad": 16 },
    { nombre: 'Maria', "edad": 30 },
  ];
}
