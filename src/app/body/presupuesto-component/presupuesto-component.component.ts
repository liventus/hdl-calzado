import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {BreakpointObserver,Breakpoints} from "@angular/cdk/layout";


import { distinctUntilChanged, tap } from 'rxjs/operators';
import {MatCardModule} from "@angular/material/card";
import {NgSwitch, NgSwitchCase} from "@angular/common";


@Component({
  selector: 'app-presupuesto-component',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './presupuesto-component.component.html',
  styleUrl: './presupuesto-component.component.css',

})
export default class PresupuestoComponentComponent implements OnInit{

  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }


  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
    } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
    } else if(this.breakpointObserver.isMatched('(min-width: 500px)')) {
      this.currentBreakpoint = '(min-width: 500px)';
    }
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
