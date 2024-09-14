import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './core/layout/layout.component';
import { CarsListComponent } from './pages/cars-list/cars-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Envolvendo todas as rotas com o layout principal
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'lista-carros', component: CarsListComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
