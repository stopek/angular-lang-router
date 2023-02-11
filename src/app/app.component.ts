import { Component, OnInit } from '@angular/core';
import { ContentStreamer } from './core/modules/content/streamer/content-streamer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private contentStreamer: ContentStreamer) {}

  ngOnInit() {
    console.log(
      `w AppComponent.ngOnInit lang: ${this.contentStreamer.language}`
    );
  }
}
