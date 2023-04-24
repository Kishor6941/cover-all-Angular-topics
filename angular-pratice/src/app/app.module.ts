import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildCompComponent } from './life-cycle/child-comp/child-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    NavbarComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
