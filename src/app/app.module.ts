import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/components/not-found/not-found.component';
import { AboutComponent } from './modules/modules/about/components/about/about.component';
import { HomeComponent } from './modules/components/home/home.component';
import { ContentModule } from './core/modules/content/content.module';
import { LayoutComponent } from './modules/layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReadmeComponent } from './modules/components/readme/readme.component';

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
