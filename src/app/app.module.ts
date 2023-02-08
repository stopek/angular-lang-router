import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {NavigatorComponent} from "./components/navigator/navigator.component";
import {RouterModule, Routes} from "@angular/router";
import {ContentModule} from "./language/content.module";


const routes: Routes = [
  {path: '', loadChildren: () => import('./app-routing.module').then(m => m.AppRoutingModule)},
  {path: ':lang', loadChildren: () => import('./app-routing.module').then(m => m.AppRoutingModule)},
  {path: '**', redirectTo: "not-found", pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,

    ContentModule.init({
      selector: "lang",
      source: "assets/i18n",
      defaultValue: "pl",
      supportedValues: ["pl", "en"]
    }),
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, NotFoundComponent, AboutComponent, HomeComponent, NavigatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
