import { NgModule } from '@angular/core';

import {
  ContentRouterModule,
  RoutesWithContent,
} from 'src/app/core/modules/content/router/content-router.module';

import { AboutComponent } from './components/about/about.component';
import { LayoutComponent } from './layout/layout.component';

const routes: RoutesWithContent = [
  {
    path: 'about',
    component: LayoutComponent,
    content: 'global',
    children: [
      {
        path: 'me',
        component: AboutComponent,
        content: 'home',
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [ContentRouterModule.forChild(routes)],
  exports: [ContentRouterModule],
})
export class AboutRoutingModule {}
