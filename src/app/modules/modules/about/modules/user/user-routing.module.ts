import { NgModule } from '@angular/core';
import { JohnComponent } from './components/john/john.component';

import {
  ContentRouterModule,
  RoutesWithContent,
} from 'src/app/core/modules/content/router/content-router.module';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: RoutesWithContent = [
  {
    path: '',
    component: LayoutComponent,
    content: 'global',
    children: [
      {
        path: 'john',
        component: JohnComponent,
      },

      {
        path: 'admin',
        content: 'admin',
        component: AdminComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ContentRouterModule.forChild(routes)],
  exports: [ContentRouterModule],
})
export class UserRoutingModule {}
