import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { RouterService } from './core/modules/content/router/router.service';
import { ContentStreamer } from './core/modules/content/streamer/content-streamer.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
})
export class InitComponent implements OnInit {
  constructor(
    readonly contentStreamer: ContentStreamer,
    readonly cookieService: CookieService,
    readonly routerService: RouterService
  ) {
    routerService.subscribeRouterChange(this.handleRouteChanges.bind(this));
  }

  ngOnInit() {
    console.log(
      `w InitComponent.ngOnInit lang: ${this.contentStreamer.language}`
    );
  }

  async handleRouteChanges(_: NavigationEnd) {
    if (!this.cookieService.get('redirect')) {
      return;
    }

    await this.routerService.navigateByUrl('/readme');
  }
}
