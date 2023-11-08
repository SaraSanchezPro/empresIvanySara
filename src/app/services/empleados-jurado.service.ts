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
    return this.http.get<Empleado>(`${this.apiUrl}/${idtrabajadores}`)
  }

  anadirEmpleado(nuevoEmpleado: Empleado) {
    return this.http.post(`${this.apiUrl}`, nuevoEmpleado);
  }
  
  modificarEmpleado(empleado: Empleado) {
    return this.http.put(`${this.apiUrl}`, empleado);
  }

  eliminarEmpleado(idtrabajadores: number){
    return this.http.delete<Empleado>(`${this.apiUrl}/${idtrabajadores}`);
  }

}
