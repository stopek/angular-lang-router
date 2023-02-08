import {inject, InjectionToken, Type} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {SelectorResolver} from './selector-resolver.service';
import {ContentLoader} from '../loader/content-loader.service';
import {catchError, take} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

/** Base resolver loading the page content according to the requested language */
export class ContentResolver implements Resolve<any> {

  constructor(readonly loader: ContentLoader, readonly selector: SelectorResolver, readonly source: string, readonly file: string) {
  }

  /** Builds a content resolver instance for the specified source file on the fly */
  static create<T = any>(source: string, file: string, providedIn: 'root' | Type<T> = 'root') {

    return new InjectionToken(`content.${file}`, {
      providedIn,
      factory: () => new ContentResolver(inject(ContentLoader as any), inject(SelectorResolver), source, file)
    });
  }

  /** Resolves the content loading the requested source file */
  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // Resolves the language code from the route
    const lang = this.selector.resolve(route);
    // Loads the specified module from the language forlder
    return this.loader.loadFile(this.source, lang, this.file)
      .pipe(
        // Makes sure the loading always completes to avoid the routing got stuck
        take(1),
        // Whereve happens (the requested file does not exist) returns an empty object
        catchError(() => of({}))
      );
  }
}
