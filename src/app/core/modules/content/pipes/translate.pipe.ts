import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContentStreamer } from '../streamer/content-streamer.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  public $implicit: any = [];
  private sub!: Subscription;

  constructor(private content: ContentStreamer) {}

  transform(selector: string): string {
    this.sub = this.content
      .stream(selector)
      .subscribe((data) => (this.$implicit = data));

    return this.$implicit;
  }
}
