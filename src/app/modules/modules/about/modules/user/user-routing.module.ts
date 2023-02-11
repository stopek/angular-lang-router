import { NgModule } from '@angular/core';

import {
  ContentRouterModule,
  RoutesWithContent,
} from 'src/app/core/modules/content/router/content-router.module';

import { AdminComponent } from './components/admin/admin.component';
import { JohnComponent } from './components/john/john.component';
import { LayoutComponent } from './layout/layout.component';

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
