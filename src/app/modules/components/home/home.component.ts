import {Component, OnInit} from '@angular/core';
import {ContentStreamer} from "../../../core/modules/content/streamer/content-streamer.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private contentStreamer: ContentStreamer,
  ) {}

  ngOnInit() {
    console.log(`w HomeComponent.ngOnInit lang: ${this.contentStreamer.language}`)
  }
}
