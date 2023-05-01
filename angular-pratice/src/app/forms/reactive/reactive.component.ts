import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit
 {
  submitted = false;
  countryList = [
    {id : 'IN', value : 'India'},
    {id : 'US', value : 'US'},
    {id : 'UK', value : 'UK'},
    {id : 'JAPAN', value : 'Japan'},
      ];

constructor(private fb : FormBuilder) {}

registrationFrom = this.fb.group({
  firstName : ['',Validators.required],
  lastName : ['',Validators.required],
  DOB : ['',Validators.required],
  gender : ['male',Validators.required],
  email : ['',Validators.compose([Validators.required,Validators.email])],
  phoneNumber : ['',Validators.required],
  address : this.fb.group({
    country : ['',Validators.required],
    city : ['',Validators.required],
    street : ['',Validators.required],
    pinCode : ['',Validators.required]
  })
})

ngOnInit(): void {
  
  
}

get registerFormControl() {
  return this.registrationFrom.controls;
}
register() {
  console.log(this.registrationFrom.valid)
  if(!this.registrationFrom.valid) {
    return 
  }
  console.log(this.registrationFrom)
}

setValuesToFrom() {
   this.registrationFrom.setValue({
    "firstName": "kishor",
    "lastName": "Fawade",
    "DOB": "25/0/1996",
    "gender": "male",
    "email": "phawadeks9049@gmail.com",
    "phoneNumber": "9090909090",
    "address": {
        "country": "IN",
        "city": "Latur",
        "street": "Ausa",
        "pinCode": "33232"
    }
})
}

reset() {
  this.registrationFrom.reset();
}

}


