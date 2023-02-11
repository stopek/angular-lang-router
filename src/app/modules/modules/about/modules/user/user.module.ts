import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminComponent } from './components/admin/admin.component';
import { JohnComponent } from './components/john/john.component';
import { LayoutComponent } from './layout/layout.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LayoutComponent, JohnComponent, AdminComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [],
  bootstrap: [LayoutComponent],
  exports: [],
})
export class UserModule {}
