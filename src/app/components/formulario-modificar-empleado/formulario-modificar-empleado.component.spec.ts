import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModificarEmpleadoComponent } from './formulario-modificar-empleado.component';

describe('FormularioModificarEmpleadoComponent', () => {
  let component: FormularioModificarEmpleadoComponent;
  let fixture: ComponentFixture<FormularioModificarEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioModificarEmpleadoComponent]
    });
    fixture = TestBed.createComponent(FormularioModificarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
