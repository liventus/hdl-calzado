import { Component } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {MenuService} from "../menu.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent
  ],
  providers: [MenuService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {}

}
