import {Component} from '@angular/core';
import {ContentSelector} from "./language/router/content-selector.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private contentSelector: ContentSelector, private router: Router) {
    this.router.events.subscribe(async (res) => {
      if (res instanceof NavigationEnd) {
        const segments = res.url.split("/").filter(segment => segment);
        const allowed = contentSelector.isValueAllowed(segments?.[0]);

        if (segments.length > 1) {
          delete segments[0];
        }

        if (!allowed) {
          await router.navigate([`pl/${segments.join("/")}`]);
          return;
        }
      }
    });
  }
}
