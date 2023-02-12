import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { RouterService } from 'src/app/core/modules/content/router/router.service';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
})
export class ReadmeComponent {
  constructor(
    readonly cookieService: CookieService,
    readonly routerService: RouterService
  ) {}

  public async clearRedirect() {
    this.cookieService.delete('redirect', '/');
    await this.routerService.navigate(['/']);
  }

  public get isNeedRead(): boolean {
    return this.cookieService.check('redirect');
  }
}
