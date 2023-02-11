import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ContentModule } from './core/modules/content/content.module';
import { HomeComponent } from './modules/components/home/home.component';
import { NotFoundComponent } from './modules/components/not-found/not-found.component';
import { ReadmeComponent } from './modules/components/readme/readme.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { AboutComponent } from './modules/modules/about/components/about/about.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-routing.module').then((m) => m.AppRoutingModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ContentModule.init({
      selector: 'lang',
      source: 'assets/i18n',
      defaultValue: 'en',
      supportedValues: ['pl', 'en'],
    }),
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
    LayoutComponent,
    ReadmeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
