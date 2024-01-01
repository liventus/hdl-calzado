import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {NgClass} from "@angular/common";
import {MenuService} from "../../menu.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [MenuService]
})
export class MenuComponent {
  pantallaActual: string = 'inicio';
  opcionSeleccionada: string = 'inicio';

  constructor(private menuService: MenuService) {}

  cambiarPantalla(pantalla: string) {
    this.pantallaActual = pantalla;
    this.opcionSeleccionada = pantalla;
    this.menuService.actualizarOpcionSeleccionada(pantalla); // Asegúrate de tener esta función en tu servicio
  }
}
