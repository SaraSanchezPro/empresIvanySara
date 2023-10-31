import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-empleados',
  templateUrl: './eliminar-empleados.component.html',
  styleUrls: ['./eliminar-empleados.component.css']
})
export class EliminarEmpleadosComponent {

  empleados: string[] = [];

  mostrarEmpleados(){
    this.empleados = ['Antonia Pérez', 'Carlos Andrés De Todos Los Santos', 'Julián Sueños']
  }

  eliminarEmpleado(index: number) {
    this.empleados.splice(index, 1);
  }

}
