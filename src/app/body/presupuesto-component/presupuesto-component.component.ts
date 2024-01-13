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

  displayedColumns: string[] = ['position', 'material', 'precio'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.modeloService.getPlaces().subscribe(modelo =>{
      console.log(modelo);
    })


  }
}
export interface PeriodicElement {
  material: string;
  position: number;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, material: 'cuero', precio: 1.02},
  {position: 2, material: 'cuero', precio: 1.02},
  {position: 3, material: 'cuero', precio: 1.02},
  {position: 4, material: 'cuero', precio: 1.02}
];


