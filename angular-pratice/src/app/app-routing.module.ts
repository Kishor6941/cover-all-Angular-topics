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
import { AuthGuard } from './services/guard/auth.guard';
import { ProductComponent } from './product/product/product.component';
import { ChildAuthGuard } from './services/guard/child-auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { DeactivateAuthGuard } from './services/guard/deactivate-auth.guard';
import { ResolveGuard } from './services/guard/resolve.guard';
import { CanloadGuard } from './services/guard/canload.guard';

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
        resolve : {
          data : ResolveGuard
        }
       },
       {
        path : 'users/:id',
        component : ViewUserComponent,
       },
       {
        path : 'about',
        component : AboutComponent,
        canActivateChild : [ChildAuthGuard],
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
    loadChildren: () => import("./product/product.module").then(module => module.ProductModule),
    canLoad: [CanloadGuard]
  },
  // {
  //   path : 'product',
  //   component : ProductComponent,
  //   canActivate : [AuthGuard],
  // },
  {
    path : 'add-user',
    component : AddUserComponent,
    canActivate : [AuthGuard],
    // canDeactivate : [DeactivateAuthGuard]
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
