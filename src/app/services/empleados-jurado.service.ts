import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosJuradoService {
  private apiUrl = 'http://localhost:3000/empleados';
  
  constructor(private http: HttpClient) {

  }
  getEmpleados() {
    return this.http.get<Empleado[]>(this.apiUrl)
  }

  getEmpleado(idtrabajadores: number){
    return this.http.get<Empleado>(`${this.apiUrl}/${idtrabajadores}`)//no FUNCIONA
  }

  anadirEmpleado(nuevoEmpleado: Empleado) {
    return this.http.post(`${this.apiUrl}`, nuevoEmpleado); //ENVÍA A NULL NAME; LASTNAME Y AGE
  }
  //Cómo se haría con un observable???

}
