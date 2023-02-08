import {ContentRouterModule, RoutesWithContent} from "./language/router/content-router.module";
import {NavigatorComponent} from "./components/navigator/navigator.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {NgModule} from "@angular/core";

const routes: RoutesWithContent = [
  {
    path: '', component: NavigatorComponent,
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
    ]
  }
];

@NgModule({
  imports: [
    ContentRouterModule.forChild(routes)
  ]
})
export class AppRoutingModule {
}
