import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados: string[] = [];

  mostrarEmpleados(){
    this.empleados = ['Antonia Pérez', 'Carlos Andrés De Todos Los Santos', 'Julián Sueños']
  }

}
