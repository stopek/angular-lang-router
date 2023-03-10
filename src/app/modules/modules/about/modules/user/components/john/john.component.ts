import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { ContentConfigurator } from 'src/app/core/modules/content/loader/content-configurator.service';
import { RouterService } from 'src/app/core/modules/content/router/router.service';

@Component({
  selector: 'app-john',
  templateUrl: './john.component.html',
})
export class JohnComponent {
  constructor(
    private cookieService: CookieService,
    private contentConfig: ContentConfigurator,
    private routerService: RouterService
  ) {}

  public async initRedirect() {
    this.cookieService.set('redirect', 'yes', {
      expires: 5000,
      path: '/',
    });
    await this.routerService.navigateByUrl(this.contentConfig.currentValue);
  }
}
