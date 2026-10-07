import { Routes } from '@angular/router';
import { CarlistComponent } from './carlist/carlist.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'list',
    component: CarlistComponent,
    canActivate: [authGuard],
  },
  {
    path: 'addForm',
    component: CarlistComponent,
  },
];
