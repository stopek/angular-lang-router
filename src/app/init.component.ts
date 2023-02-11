import {Component, OnInit} from '@angular/core';
import {ContentStreamer} from "./core/modules/content/streamer/content-streamer.service";
import {CookieService} from "ngx-cookie-service";
import {RouterService} from "./core/modules/content/router/router.service";
import {ContentConfigurator} from "./core/modules/content/loader/content-configurator.service";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
})
export class InitComponent implements OnInit  {
  constructor(
    private contentStreamer: ContentStreamer,
    private cookieService: CookieService,
    private routerService: RouterService,
  ) {}

  ngOnInit() {
    if (this.cookieService.get('redirect')) {
      this.routerService.navigateByUrl('/readme');
    }

    console.log(`w InitComponent.ngOnInit lang: ${this.contentStreamer.language}`);
  }
}
