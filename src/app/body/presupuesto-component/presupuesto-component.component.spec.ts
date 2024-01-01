import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoComponentComponent } from './presupuesto-component.component';

describe('PresupuestoComponentComponent', () => {
  let component: PresupuestoComponentComponent;
  let fixture: ComponentFixture<PresupuestoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresupuestoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
