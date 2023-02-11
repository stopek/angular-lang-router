import { Injectable } from '@angular/core';
import {
  NavigationBehaviorOptions,
  NavigationExtras,
  Router,
} from '@angular/router';

import { ContentConfigurator } from '../loader/content-configurator.service';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(
    private router: Router,
    private contentConfig: ContentConfigurator
  ) {}

  get events() {
    return this.router.events;
  }

  get url() {
    return this.router.url;
  }

  append(part: string): string {
    const redirectTo =
      '/' + this.trimChar(this.contentConfig.currentValue + part, '/');

    console.log({
      redirectTo,
    });

    return redirectTo;
  }

  appendLanguage(commands: any[]): any[] {
    const parts = [...commands];
    parts[0] = this.append(parts[0]);

    return parts;
  }

  navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(this.appendLanguage(commands), extras);
  }

  navigateByUrl(
    url: string,
    extras?: NavigationBehaviorOptions
  ): Promise<boolean> {
    return this.router.navigateByUrl(this.append(url), extras);
  }

  trimChar(string: string, charToRemove: string = ' ') {
    while (string.charAt(0) == charToRemove) {
      string = string.substring(1);
    }

    while (string.charAt(string.length - 1) == charToRemove) {
      string = string.substring(0, string.length - 1);
    }

    return string;
  }
}
