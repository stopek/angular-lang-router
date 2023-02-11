import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

import {ContentConfigurator} from "src/app/core/modules/content/loader/content-configurator.service";

@Component({
  selector: 'app-john',
  templateUrl: './john.component.html',
})
export class JohnComponent {
  constructor(
    private cookieService: CookieService,
    private contentConfig: ContentConfigurator
  ) {}

  public initRedirect() {
    this.cookieService.set('redirect', 'yes', {
      expires: 5000,
      path: '/',
    });
    window.location.replace('/' + this.contentConfig.currentValue);
  }
}
