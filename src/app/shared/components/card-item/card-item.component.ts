import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/cars-model';
import { ValorBrPipe } from '../../pipes/valor-br.pipe';


@Component({
  selector: 'card-item',
  standalone: true,
  imports: [ValorBrPipe],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() item!: Vehicle;

  constructor() { }
}
