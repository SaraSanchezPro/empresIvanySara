import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ModificarEmpleadosComponent } from './pages/modificar-empleados/modificar-empleados.component';
import { EliminarEmpleadosComponent } from './pages/eliminar-empleados/eliminar-empleados.component';
import { NuevoEmpleadoComponent } from './pages/nuevo-empleado/nuevo-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ModificarEmpleadosComponent,
    EliminarEmpleadosComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
