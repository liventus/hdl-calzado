import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private opcionSeleccionadaSubject = new BehaviorSubject<string>('inicio');
  opcionSeleccionada$ = this.opcionSeleccionadaSubject.asObservable();

  actualizarOpcionSeleccionada(opcion: string) {
    console.log('Opción seleccionada menuservicio:', opcion);
    this.opcionSeleccionadaSubject.next(opcion);
    console.log('Opción seleccionada: menuservicio', opcion);
  }
}
