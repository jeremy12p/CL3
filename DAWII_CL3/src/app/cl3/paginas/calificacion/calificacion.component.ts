import { Component } from '@angular/core';

@Component({
  templateUrl: './calificacion.component.html',
  styles: []
})
export class CalificacionComponent {
  promedio: number | null = null;
  suma: number = 0;

  calcularPromedio(cali1Input: string, cali2Input: string, cali3Input: string) {
    const calificacion1 = parseInt(cali1Input, 10);
    const calificacion2 = parseInt(cali2Input, 10);
    const calificacion3 = parseInt(cali3Input, 10);

    this.suma = calificacion1 + calificacion2 + calificacion3;
    this.promedio = this.suma / 3;
  }
}
