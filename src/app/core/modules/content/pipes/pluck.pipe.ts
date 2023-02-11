import { Pipe, PipeTransform } from '@angular/core';

/** Uses the input string as a key to pluck a value from an object.
 * Dotted separated keys are supoprted to pluck values deeper.
 * @example 'errors.required' | pluck: errorMessages */
@Pipe({ name: 'pluck' })
export class PluckPipe implements PipeTransform {
  transform(key: string, value?: any, defaultValue?: any): any {
    if (!(value instanceof Object) || !key) {
      return value;
    }

    return key.split(/[.\/]/).reduce((value, key) => {
      return value[key] !== undefined ? value[key] : defaultValue;
    }, value);
  }
}
