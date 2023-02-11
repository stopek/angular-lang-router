import {Component} from '@angular/core';

import {ContentStreamer} from "src/app/core/modules/content/streamer/content-streamer.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor(private content: ContentStreamer) {
    console.log(content.select('global.global_variable'));
  }
}
