import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorbr',
  standalone: true
})
export class ValorBrPipe implements PipeTransform {
  intl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  transform(value: any): unknown {
    let valor: any = value;
    if (typeof value !== 'number') {
      valor = parseFloat(value);
    }
    if (isNaN(valor)) {
      valor = 0;
    }
    return this.intl.format(valor);
  }


}
