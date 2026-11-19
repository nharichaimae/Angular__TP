import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';

export const routes: Routes = [
  {
    path: '',
    component: Header
  },
  {
    path: 'tasks',
    component: Tasks
  }
];