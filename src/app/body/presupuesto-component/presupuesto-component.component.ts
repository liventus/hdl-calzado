import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {BreakpointObserver,Breakpoints} from "@angular/cdk/layout";


import { distinctUntilChanged, tap } from 'rxjs/operators';
import {MatCardModule} from "@angular/material/card";
import {NgSwitch, NgSwitchCase} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";


@Component({
  selector: 'app-presupuesto-component',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    NgSwitch,
    NgSwitchCase,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './presupuesto-component.component.html',
  styleUrl: './presupuesto-component.component.css',

})
export default class PresupuestoComponentComponent implements OnInit{





  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

  }




}


