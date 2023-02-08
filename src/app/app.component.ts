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
        const allowed = contentSelector.isValueAllowed(res.url.split("/").filter(segment => segment)?.[0]);

        if (!allowed) {
          // await router.navigate(["/not-found"]);
        }
      }
    });
  }
}
