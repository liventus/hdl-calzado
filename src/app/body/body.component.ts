import {Component, DoCheck, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {BehaviorSubject, Subscription} from "rxjs";
import {MenuService} from "../menu.service";
import {NgComponentOutlet, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {ChangeDetectorRef} from '@angular/core';
import {NgZone} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import InicioComponentComponent from "./inicio-component/inicio-component.component";
import PresupuestoComponentComponent from "./presupuesto-component/presupuesto-component.component";
import {routes} from "../app.routes";




@Component({
  selector: "app-body",
  standalone: true,
  imports: [
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgForOf,
    NgComponentOutlet,
    RouterOutlet,
    InicioComponentComponent,
    PresupuestoComponentComponent
  ],

  templateUrl: './body.component.html',
  styleUrl: './body.component.css',

})
export default class BodyComponent {

  public menuItems = routes.map((route) => route.children ?? [])
    .flat();




}


