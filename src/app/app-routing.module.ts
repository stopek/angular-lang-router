import { NgModule } from '@angular/core';

import {
  ContentRouterModule,
  RoutesWithContent,
} from './core/modules/content/router/content-router.module';
import { ContentSelector } from './core/modules/content/router/content-selector.service';
import { HomeComponent } from './modules/components/home/home.component';
import { NotFoundComponent } from './modules/components/not-found/not-found.component';
import { ReadmeComponent } from './modules/components/readme/readme.component';
import { LayoutComponent } from './modules/layout/layout.component';

import { InitComponent } from './init.component';

const routes: RoutesWithContent = [
  {
    path: '',
    component: InitComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        canActivate: [ContentSelector],
        pathMatch: 'full',
      },
      {
        path: ':lang',
        component: LayoutComponent,
        canActivate: [ContentSelector],
        content: 'global',
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'readme',
            component: ReadmeComponent,
            pathMatch: 'full',
          },
          {
            path: '',
            loadChildren: () =>
              import('./modules/modules/about/about.module').then(
                (m) => m.AboutModule
              ),
          },
          {
            path: 'not-found',
            component: NotFoundComponent,
            pathMatch: 'full',
          },
          { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [InitComponent],
  imports: [ContentRouterModule.forChild(routes)],
})
export class AppRoutingModule {}
