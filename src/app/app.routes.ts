import { Routes } from '@angular/router';
import { CarlistComponent } from './carlist/carlist.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./carlist/carlist.component').then((m) => m.CarlistComponent),
    canActivate: [authGuard],
  },
  {
    path: 'addForm',
    component: CarlistComponent,
  },
];
