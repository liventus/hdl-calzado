import { Component } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {MenuService} from "../menu.service";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {rutas} from "../routes" ;
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent, CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule,RouterModule
  ],
  providers: [MenuService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {




  protected readonly routes = rutas;
}
