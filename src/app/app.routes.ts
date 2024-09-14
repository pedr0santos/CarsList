import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Envolvendo todas as rotas com o layout principal
    children: [
      { path: 'home', component: HomeComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
