import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from 'src/app/add-user/add-user.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateAuthGuard implements CanDeactivate<AddUserComponent> {
  canDeactivate(
    component: AddUserComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.userName.dirty) {
      return window.confirm("You have some unsaved changes are you sure you want to navigate?");
    }
    return true
  }
  
}
