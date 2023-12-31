import { Component } from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CdkMenuTrigger} from "@angular/cdk/menu";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    CdkMenuTrigger
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
