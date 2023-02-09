import {Component} from '@angular/core';
import {ContentStreamer} from "../../language/streamer/content-streamer.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor(private content: ContentStreamer) {
    console.log(content.select('navigator.test'))
  }
}
