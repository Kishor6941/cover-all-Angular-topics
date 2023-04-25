import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildCompComponent } from './life-cycle/child-comp/child-comp.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { AuthTokenInterceptor } from './services/auth-token.interceptor';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { LocationComponent } from './location/location.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    NavbarComponent,
    ChildCompComponent,
    UserComponent,
    AboutComponent,
    TdfComponent,
    ReactiveComponent,
    PageNotFoundComponent,
    ViewUserComponent,
    LoaderComponent,
    LocationComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthTokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
