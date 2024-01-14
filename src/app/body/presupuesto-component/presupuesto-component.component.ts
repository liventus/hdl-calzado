import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from "@angular/material/card";
import { NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { ModelosService } from "../../service/modelos.service";
import CostoModelo from "../../interfaces/costomodelo.interface";

import 'firebase/firestore';



@Component({
  selector: 'app-presupuesto-component',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    NgSwitch,
    NgSwitchCase,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatRippleModule,
    MatInputModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './presupuesto-component.component.html',
  styleUrl: './presupuesto-component.component.css',

})
export default class PresupuestoComponentComponent implements OnInit{
  protected costosdeModelos: CostoModelo[] = [];
  constructor(private modeloService: ModelosService) {
  }
  displayedColumns: string[] = ['resumen', 'monto'];
  ngOnInit(): void {
    this.modeloService.getPlaces().subscribe(x =>{
      console.log(x);
      this.costosdeModelos = x
      console.log(x);
    })
  }




}
export interface PeriodicElement {
  resumen: string;
  monto: number;
}








