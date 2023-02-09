import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';

export const ContentConfigToken = new InjectionToken<ContentConfig>('content.config');

export interface ContentConfig {
  selector?: string;
  source?: string;
  defaultValue?: string;
  supportedValues?: string[];
}

@Injectable({
  providedIn: "root",
})
export class ContentConfigurator implements ContentConfig {
  constructor(@Optional() @Inject(ContentConfigToken) readonly config: ContentConfig) {}

  private _currentValue!: string;

  /** Returns the currently selected value or the default one when undefined */
  public get currentValue(): string {
    return this._currentValue || this.defaultValue;
  }

  /** Sets the current value for other services sharing the ContentConfigurator to take advantage from */
  public set currentValue(value: string) {
    this._currentValue = value;
  }

  /** Returns the route selector (aka param name) as per the config */
  public get selector(): string {
    return !!this.config && this.config.selector || 'lang';
  }

  /** Returns the root path of the content json files as per the config */
  public get source(): string {
    return !!this.config && this.config.source || 'assets/i18n';
  }

  /** Returns the default language code as per the config */
  public get defaultValue(): string {
    return !!this.config && this.config.defaultValue || 'en';
  }

  /** Returns the optional array of supported languages */
  public get supportedValues(): string[] {
    return !!this.config && this.config.supportedValues || [this.defaultValue];
  }
}
