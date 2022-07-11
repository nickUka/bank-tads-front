import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipePipe implements PipeTransform {

  transform(value: string|number): string{
    let valor = value + '';

    valor = valor.replace(/[^0-9]/, '')              
            .replace(                           
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4'
            );

    return valor;
  }

}
