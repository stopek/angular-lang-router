import {ContentRouterModule, RoutesWithContent} from "./language/router/content-router.module";
import {NavigatorComponent} from "./components/navigator/navigator.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: RoutesWithContent = [
  {path: '', redirectTo: 'pl', pathMatch: "full"},
  {
    path: ':lang',
    component: NavigatorComponent,
    content: "navigator",
    children: [
      {
        path: '',
        component: HomeComponent,
        content: "home"
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {path: 'not-found', component: NotFoundComponent, pathMatch: 'full'},
      {path: '**', redirectTo: "not-found", pathMatch: 'full'}
    ],
  },
];

@NgModule({
  imports: [
    ContentRouterModule.forChild(routes)
  ]
})
export class AppRoutingModule {
}
