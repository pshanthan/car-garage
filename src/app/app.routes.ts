import { Routes } from '@angular/router';
import { CarlistComponent } from './carlist/carlist.component';

export const routes: Routes = [
  {
    path: 'list',
    component: CarlistComponent,
  },
  {
    path: 'addForm',
    component: CarlistComponent,
  },
];
