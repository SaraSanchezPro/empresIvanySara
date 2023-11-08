import { Component } from '@angular/core';
import { EmpleadosJuradoService } from 'src/app/services/empleados-jurado.service';
import { Empleado } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-formulario-modificar-empleado',
  templateUrl: './formulario-modificar-empleado.component.html',
  styleUrls: ['./formulario-modificar-empleado.component.css']
})
export class FormularioModificarEmpleadoComponent {
  public name : string = "";
  public lastName: string = "";
  public age: number = 0;
  public empleadoId: number;
  
  constructor(private empleadoService: EmpleadosJuradoService){}

  modificarEmpleado() {
    if (this.empleadoId) {
      let empleadoModificado = new Empleado(this.name, this.lastName, this.age);
      empleadoModificado.idTrabajadores = this.empleadoId;
  
      this.empleadoService.modificarEmpleado(empleadoModificado).subscribe((data) => {
        console.log('Empleado modificado:', data);
        alert('Empleado modificado correctamente.'); 
        
      });
    }
  }
}
