import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userList :any;
showLoader : boolean = false;
  constructor(private userService : UserService) {

  }


  ngOnInit(): void {
   this.getUsers();
    
  }
  getUsers() {
    this.showLoader = true;
    this.userService.firstTenUsers().subscribe((res)=> {
      this.userList = res;
      this.showLoader = false;
    },(err => {
      this.showLoader = false;
      console.log(err)
    }))
  }
}
