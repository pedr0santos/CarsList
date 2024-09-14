import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './core/layout/layout.component';
import { CarsListComponent } from './pages/cars-list/cars-list.component';
import { CarDetailComponent } from './pages/cars-list/car-detail/car-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent, // Envolvendo todas as rotas com o layout principal
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'lista-carros', component: CarsListComponent },
      { path: 'lista-carros/detalhe-carro/:idCarro', component: CarDetailComponent },
    ],
  },
];
