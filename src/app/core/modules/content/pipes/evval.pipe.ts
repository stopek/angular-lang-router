import { Pipe, PipeTransform } from '@angular/core';

/** Evaluate the expressions embedded into the input string
 * withing double brackets similarly to eval() with a context limited
 * to the sole variables passed along in the context object
 * @example 'Double counting {{ count * 2 }}' | eval: this */
@Pipe({ name: 'eval', pure: false })
export class EvalPipe implements PipeTransform {
  transform(value: any, context?: any): string {
    // Simply return the input as it is when other than string
    if (typeof value !== 'string') {
      return value;
    }

    // Declares intermediate variables
    let keys: string[], vals: any[];
    // Searches for the expressions within double brackets
    return value.replace(/{{(.*)}}/g, (match, capture) => {
      // Gets context's keys and values
      keys = keys || Object.keys(context);
      vals = vals || keys.map((key) => context[key]);
      // Dynamically creates a function with limited scope passing along the
      // keys as the argument names to be referenced withing the function body,
      // to simply return the evaluated expression value, and calls it.
      return Function(...keys, `'use strict'; return ${capture};`)(...vals);
    });
  }
}
