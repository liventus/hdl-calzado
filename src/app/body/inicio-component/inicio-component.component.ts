import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-inicio-component',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './inicio-component.component.html',
  styleUrl: './inicio-component.component.css',

})
export default class InicioComponentComponent {

}
