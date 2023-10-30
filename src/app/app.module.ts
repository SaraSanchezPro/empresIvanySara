import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ModificarEmpleadosComponent } from './pages/modificar-empleados/modificar-empleados.component';
import { EliminarEmpleadosComponent } from './pages/eliminar-empleados/eliminar-empleados.component';
import { NuevoEmpleadoComponent } from './pages/nuevo-empleado/nuevo-empleado.component';
import { FormularioModificarEmpleadoComponent } from './components/formulario-modificar-empleado/formulario-modificar-empleado.component';
import { FormularioAnadirEmpleadoComponent } from './components/formulario-anadir-empleado/formulario-anadir-empleado.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ModificarEmpleadosComponent,
    EliminarEmpleadosComponent,
    NuevoEmpleadoComponent,
    FormularioModificarEmpleadoComponent,
    FormularioAnadirEmpleadoComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
