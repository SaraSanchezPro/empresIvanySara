import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosJuradoService } from 'src/app/services/empleados-jurado.service';

@Component({
  selector: 'app-formulario-anadir-empleado',
  templateUrl: './formulario-anadir-empleado.component.html',
  styleUrls: ['./formulario-anadir-empleado.component.css']
})
export class FormularioAnadirEmpleadoComponent {
  public nuevoEmpleado: Empleado = new Empleado(0, '', '', 0);

  constructor(private empleadoService: EmpleadosJuradoService){}
  anadirEmpleado() {
    this.empleadoService.anadirEmpleado(this.nuevoEmpleado).subscribe(
      (data) => {
        console.log('Empleado añadido:', data);
        alert('Empleado añadido correctamente.');
        this.nuevoEmpleado = new Empleado(0, '', '', 0);
      }
    );
}
}
