import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildCompComponent } from './life-cycle/child-comp/child-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { AuthTokenInterceptor } from './services/interceptor/auth-token.interceptor';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { LocationComponent } from './location/location.component';
import { FeedComponent } from './feed/feed.component';
import { AuthGuard } from './services/guard/auth.guard';
import { ChildAuthGuard } from './services/guard/child-auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { DeactivateAuthGuard } from './services/guard/deactivate-auth.guard';
import { ResolveGuard } from './services/guard/resolve.guard';
import { CanloadGuard } from './services/guard/canload.guard';
import { LogginInterceptor } from './services/interceptor/loggin.interceptor';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { HoverDirective } from './directives/hover.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterUserPipe } from './services/filter-user.pipe';

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
    FeedComponent,
    AddUserComponent,
    BackgroundColorDirective,
    HoverDirective,
    HighlightDirective,
    FilterUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthTokenInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LogginInterceptor,
      multi : true
    },
    AuthGuard,
    ChildAuthGuard,
    DeactivateAuthGuard,
    ResolveGuard,
    CanloadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
