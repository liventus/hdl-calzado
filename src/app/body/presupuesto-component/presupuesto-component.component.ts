import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from "@angular/material/card";
import {NgSwitch, NgSwitchCase} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { ModelosService } from "../../service/modelos.service";
import Modelo from "../../interfaces/modelo.interface";


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
    FormsModule
  ],
  templateUrl: './presupuesto-component.component.html',
  styleUrl: './presupuesto-component.component.css',

})
export default class PresupuestoComponentComponent implements OnInit{



  constructor(private modeloService: ModelosService) {
  }


  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  displayedColumns: string[] = ['material', 'precio'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.modeloService.getPlaces().subscribe(modelo =>{
      console.log(modelo);
    })


  }
}
export interface PeriodicElement {
  material: string;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { material: 'COSTO TOTAL MATERIAL', precio: 28.87},
  { material: 'COSTO TOTAL S/IGV', precio: 34.64},
  { material: 'TOTAL', precio: 40.88}
];


