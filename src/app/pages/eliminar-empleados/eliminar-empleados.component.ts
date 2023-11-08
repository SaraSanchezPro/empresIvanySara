import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosJuradoService } from 'src/app/services/empleados-jurado.service';

@Component({
  selector: 'app-eliminar-empleados',
  templateUrl: './eliminar-empleados.component.html',
  styleUrls: ['./eliminar-empleados.component.css']
})
export class EliminarEmpleadosComponent {

  public empleados: Empleado[] = [];
  public idEmpleado : number = 0;
  public empleado : Empleado;

  constructor(private empleadoService: EmpleadosJuradoService) {}

  mostrarEmpleados(){
    // this.empleados = ['Antonia Pérez', 'Carlos Andrés De Todos Los Santos', 'Julián Sueños']
    this.empleadoService.getEmpleados().subscribe( 
      (data) => { 
        console.log(data);
        this.empleados = data;
        console.log('Empleados cargados:', this.empleados);
      }
    );
  }

  eliminarEmpleado() { 
    console.log('ID del empleado a eliminar:', this.idEmpleado);
    this.empleadoService.eliminarEmpleado(this.idEmpleado).subscribe((data) => {
      console.log(data);
      this.empleado = data
    });
  }

}
