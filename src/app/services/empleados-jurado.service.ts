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

  getEmpleado(name:string, lastName:string){
    return this.http.get<Empleado[]>(`${this.apiUrl}name=${name}&lastName=${lastName}`)
  }

  //Cómo se haría con un observable???

}
