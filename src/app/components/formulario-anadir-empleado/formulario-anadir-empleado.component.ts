import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosJuradoService } from 'src/app/services/empleados-jurado.service';

@Component({
  selector: 'app-formulario-anadir-empleado',
  templateUrl: './formulario-anadir-empleado.component.html',
  styleUrls: ['./formulario-anadir-empleado.component.css']
})
export class FormularioAnadirEmpleadoComponent {
  public name : string = "";
  public lastName: string = "";
  public age: number = 0;

  constructor(private empleadoService: EmpleadosJuradoService){}

  anadirEmpleado() {
    let empleado = new Empleado (this.name, this.lastName, this.age)
    console.log(empleado);
    this.empleadoService.anadirEmpleado(empleado).subscribe(
      (data) => {
        console.log('Empleado añadido:', data);
        alert('Empleado añadido correctamente.');    
      }
    );
}
}
