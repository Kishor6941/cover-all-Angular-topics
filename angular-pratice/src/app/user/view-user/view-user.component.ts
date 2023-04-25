import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
userData : any;
showLoader : boolean = false;
  constructor(private userservice : UserService, private activateRoute : ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getUserById(this.activateRoute.snapshot.params['id']);
  }

  getUserById(userId:string) : void {
    this.showLoader = true;
    this.userservice.getUserById(userId).subscribe((res:any)=>{
      this.showLoader = false;
      this.userData = res;
    },(err => {
      this.showLoader = false;
    }))
  }
}
