import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { Tasks } from './tasks/tasks';
import { Catalogue } from './produits/catalogue';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'tasks', component: Tasks },
      { path: 'catalogue', component: Catalogue },
    ],
  },
];