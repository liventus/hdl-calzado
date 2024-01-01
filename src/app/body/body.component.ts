import {Component, DoCheck, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {InicioComponentComponent} from "./inicio-component/inicio-component.component";
import {PresupuestoComponentComponent} from "./presupuesto-component/presupuesto-component.component";
import {BehaviorSubject, Subscription} from "rxjs";
import {MenuService} from "../menu.service";
import {NgComponentOutlet, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {ChangeDetectorRef} from '@angular/core';
import {NgZone} from '@angular/core';




@Component({
  selector: "app-body",
  standalone: true,
  imports: [
    InicioComponentComponent,
    PresupuestoComponentComponent,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgForOf,
    NgComponentOutlet
  ],
  providers: [MenuService],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',

})
export class BodyComponent implements OnInit{

  opcionSeleccionada: string = "0";

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.opcionSeleccionada$.subscribe(opcion => {
      this.opcionSeleccionada = opcion;
      // Puedes agregar lógica adicional aquí si es necesario
      console.log(`La opción seleccionada cambió. Nuevo valor: ${opcion}`);
    });
  }



}


