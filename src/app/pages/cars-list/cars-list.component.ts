import { CardItemComponent } from '../../shared/components/card-item/card-item.component';
import { Vehicle } from '../../shared/models/cars-model';
import { CarsService } from './../../core/services/cars.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css',
})
export class CarsListComponent {
  vehicles: Vehicle[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.carsService.getVehicles().subscribe({
      next: (data) => (this.vehicles = data),
      error: (err) => console.error('Erro ao carregar veículos', err),
    });
  }
}
