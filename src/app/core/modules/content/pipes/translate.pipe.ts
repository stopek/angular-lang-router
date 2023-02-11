import {Pipe, PipeTransform} from "@angular/core";
import {ContentStreamer} from "../streamer/content-streamer.service";
import {Subscription} from "rxjs";

@Pipe({
  name: "translate",
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private content: ContentStreamer) {}

  private sub!: Subscription;
  public $implicit: any = [];

  transform(selector: string): string {
    this.sub = this.content.stream(selector)
      .subscribe(data => this.$implicit = data);

    return this.$implicit;
  }
}
