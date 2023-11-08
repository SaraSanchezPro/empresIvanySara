import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosJuradoService } from 'src/app/services/empleados-jurado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  public empleados: Empleado[] = []; //defino la variable que va a tener un tipo que voy a inicializar
  public idEmpleado : number = 0;
  public empleado : Empleado;


  constructor(private empleadoService: EmpleadosJuradoService) { }
  mostrarEmpleados() {
    // this.empleados = ['Antonia Pérez', 'Carlos Andrés De Todos Los Santos', 'Julián Sueños']
    this.empleadoService.getEmpleados().subscribe( 
      (data) => { 
        console.log(data);
        this.empleados = data;
      }
    );
  }

  mostrarEmpleado(){
    this.empleadoService.getEmpleado(this.idEmpleado).subscribe((data)=> { 
      console.log(data);
      this.empleado = data;
    });
  }
}
