import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { LocationComponent } from './location/location.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path : '',
    component : NavbarComponent,
    children :[
      {
        path : 'lifeCycle',
        component : LifeCycleComponent
       },
       {
        path : 'users',
        component : UserComponent,
       },
       {
        path : 'users/:id',
        component : ViewUserComponent,
       },
       {
        path : 'about',
        component : AboutComponent,
        children : [
          {
            path : 'location',
            outlet : 'location',
            component : LocationComponent
          },
          {
            path : 'feed',
            outlet : 'feed',
            component:FeedComponent
          }
        ]
       },
       {
        path : 'tdf',
        component : TdfComponent
       },
       {
        path : 'reactive',
        component : ReactiveComponent
       }
    ]
  },
  {
    path : 'product',
    loadChildren: () => import("./product/product.module").then(module => module.ProductModule)
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
