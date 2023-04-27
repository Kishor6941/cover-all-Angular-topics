import { Component } from '@angular/core';
import {FormControl} from "@angular/forms"
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  userName : FormControl = new FormControl()
constructor() {

}
}
