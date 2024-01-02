import { Routes } from '@angular/router';

export const routes: Routes = [


      {
        path: 'inicio-component',
        title: 'inicio component',
        loadComponent: () => import('./body/inicio-component/inicio-component.component')
      },
      {
        path: 'presupuesto-component',
        title: 'presupuesto component',
        loadComponent: () => import('./body/presupuesto-component/presupuesto-component.component')
      },
      {
        path: '',
        title: 'inicio component',
        loadComponent: () => import('./body/inicio-component/inicio-component.component')
      }



];
