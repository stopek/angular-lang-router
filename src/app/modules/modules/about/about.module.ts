import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';

import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, AboutRoutingModule],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class AboutModule {}
