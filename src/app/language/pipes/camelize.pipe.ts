import {Pipe, PipeTransform} from "@angular/core";

/** Converts the input string from kebab-case to camelCase*/
@Pipe({
  name: 'camelize'
})
export class CamelizePipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value !== 'string') {
      return '';
    }

    return value ? value.replace(/([_.\- ][a-z])/g, $1 => $1.toUpperCase().replace(/[_.\- ]/g, '')) : '';
  }
}
