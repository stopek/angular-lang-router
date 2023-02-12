import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { ContentSelector } from './core/modules/content/router/content-selector.service';
import { RouterService } from './core/modules/content/router/router.service';
import { ContentStreamer } from './core/modules/content/streamer/content-streamer.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
})
export class InitComponent {
  constructor(
    readonly contentStreamer: ContentStreamer,
    readonly cookieService: CookieService,
    readonly routerService: RouterService,
    readonly contentSelector: ContentSelector
  ) {
    routerService.subscribeRouterChange(this.handleRouteChanges.bind(this));
  }

  async handleRouteChanges(event: NavigationEnd) {
    const segments = event.url.split('/').filter((segment) => segment);
    const allowed = this.contentSelector.isValueAllowed(segments?.[0]);

    if (segments.length > 1) {
      delete segments[0];
    }

    if (!allowed) {
      await this.routerService.navigate([
        `${this.contentSelector.config.defaultValue}/${segments.join('/')}`,
      ]);
      return;
    }

    if (!this.cookieService.check('redirect')) {
      return;
    }

    await this.routerService.navigateByUrl('/readme');
  }
}
