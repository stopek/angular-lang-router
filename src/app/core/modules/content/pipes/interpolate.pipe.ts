import {Pipe} from "@angular/core";
import {PluckPipe} from "./pluck.pipe";

/** Replace keys embedded into the input string withing double brackets
 * with their corresponding values pluck from the conteext object
 * @example 'Counting {{ count }}' | interpolate: this */
@Pipe({name: 'interpolate', pure: false})
export class InterpolatePipe extends PluckPipe {
  override transform(value: any, context?: any): string {
    if (typeof value !== 'string') {
      return value;
    }

    return value.replace(
      /{{\s*([.\w]+)\s*}}/g, (match, capture) => super.transform(capture, context, capture)
    );
  }
}
