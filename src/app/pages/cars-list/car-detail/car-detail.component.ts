import { CarsService } from './../../../core/services/cars.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../../shared/models/cars-model';
import { ValorBrPipe } from '../../../shared/pipes/valor-br.pipe';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [ValorBrPipe],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {

  vehicle!: Vehicle;
  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idCarro');

    if (id) {
      this.loadVehicles(parseInt(id, 10));
    }
  }


  loadVehicles(id:number): void {
    this.carsService.getVehicle(id).subscribe({
      next: (data) => (this.vehicle = data),
      error: (err) => console.error('Erro ao carregar veículos', err),
    });
  }
}
