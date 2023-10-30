import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EliminarEmpleadosComponent } from './pages/eliminar-empleados/eliminar-empleados.component';
import { LoginComponent } from './pages/login/login.component';
import { ModificarEmpleadosComponent } from './pages/modificar-empleados/modificar-empleados.component';
import { NuevoEmpleadoComponent } from './pages/nuevo-empleado/nuevo-empleado.component';
import { RegisterComponent } from './pages/register/register.component';

const routes : Routes = [
  {path:"", component: EmpleadosComponent},
  {path:"empleados", component: EmpleadosComponent},
  {path:"eliminar", component: EliminarEmpleadosComponent},
  {path:"login", component: LoginComponent},
  {path:"modificar", component: ModificarEmpleadosComponent},
  {path:"nuevo", component: NuevoEmpleadoComponent},
  {path:"registro", component: RegisterComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot (routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
