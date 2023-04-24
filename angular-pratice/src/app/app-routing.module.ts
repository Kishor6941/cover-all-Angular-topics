import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

const routes: Routes = [
  {
    path : '',
    component : NavbarComponent,
    children :[
      {
        path : 'lifeCycle',
        component : LifeCycleComponent
       }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
