import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnadirEmpleadoComponent } from './formulario-anadir-empleado.component';

describe('FormularioAnadirEmpleadoComponent', () => {
  let component: FormularioAnadirEmpleadoComponent;
  let fixture: ComponentFixture<FormularioAnadirEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAnadirEmpleadoComponent]
    });
    fixture = TestBed.createComponent(FormularioAnadirEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
