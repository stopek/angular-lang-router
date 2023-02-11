import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {JohnComponent} from "./components/john/john.component";

import {UserRoutingModule} from "./user-routing.module";
import {AdminComponent} from "./components/admin/admin.component";

@NgModule({
  declarations: [
    LayoutComponent,
    JohnComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent],
  exports: [],
})
export class UserModule {
}
