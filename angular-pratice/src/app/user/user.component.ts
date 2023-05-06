import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userList :any;
searchUser : string = '';
showLoader : boolean = false;
  constructor(private userService : UserService, private route : ActivatedRoute) {

  }


  ngOnInit(): void {
   this.getUsers();
  // this.userList = this.route.snapshot.data['data'];
    
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
