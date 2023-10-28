import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmpleadosComponent } from './eliminar-empleados.component';

describe('EliminarEmpleadosComponent', () => {
  let component: EliminarEmpleadosComponent;
  let fixture: ComponentFixture<EliminarEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarEmpleadosComponent]
    });
    fixture = TestBed.createComponent(EliminarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
