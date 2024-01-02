import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {HeaderComponent} from "./header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, UserComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hdl-calzado';
}
