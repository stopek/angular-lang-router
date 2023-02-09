import {Pipe, PipeTransform} from "@angular/core";

/** Converts the input string from camelCase to kebab-case*/
@Pipe({name: 'hyphenize'})
export class HyphenizePipe implements PipeTransform {
  transform(value: any, hyphen: string = '-'): string {
    if (typeof value !== 'string') {
      return '';
    }

    return value ? value.replace(/([A-Z])/g, $1 => hyphen + $1.toLowerCase()) : '';
  }
}
