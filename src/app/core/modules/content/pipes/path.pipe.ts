import {Pipe, PipeTransform} from "@angular/core";

type TParam = string | number | boolean;
export type TRouteParams = Record<string, TParam>;

@Pipe({
  name: "path"
})
export class PathPipe implements PipeTransform {
  transform(path: string, params: TRouteParams): string {

    let outputRoute = path.toString();

    Object.keys(params).forEach((key) => {
      const clearParam = null === params[key];

      const regex = new RegExp(`(/?)(:${key})\\??`, 'gi');
      if (typeof params[key] !== 'undefined') {
        outputRoute = outputRoute.replace(
          regex,
          clearParam ? '' : '$1' + (params[key] ?? '').toString(),
        );
      }
    });

    return outputRoute;
  }
}
