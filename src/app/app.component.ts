import { Component, OnInit } from '@angular/core';

// import { NavigationEnd, Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
//
// import { ContentSelector } from './core/modules/content/router/content-selector.service';
// import { RouterService } from './core/modules/content/router/router.service';
import { ContentStreamer } from './core/modules/content/streamer/content-streamer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // private cookieService: CookieService,
  // private routerService: RouterService,
  // private contentSelector: ContentSelector,
  // private router: Router
  constructor(private contentStreamer: ContentStreamer) {}

  ngOnInit() {
    console.log(
      `w AppComponent.ngOnInit lang: ${this.contentStreamer.language}`
    );
  }
}
