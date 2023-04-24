import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnDestroy {
  inputValue= 'red';
  userList= [];
  userSub : Subscription;
  @ViewChild('appComp') child : ChildCompComponent; 

  constructor(private userService : UserService) {

  }

ngOnInit(): void {
  this.getUserList();
  
}

getUserList() : void {
  this.userSub = this.userService.getUserList().subscribe((users:any) => {
    this.userList = users.filter((user :any) => {
      return user.completed
    })
    
  })
}
check() : void {
  console.log('check')
  this.child.sendBack();
}
comingFromChild(event:any) {
  console.log(event)
}
ngOnDestroy(): void {
  console.log("ngDestroy called");
  if(this.userSub) this.userSub.unsubscribe();
  
}
}
