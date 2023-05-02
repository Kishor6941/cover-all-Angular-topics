import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
  firstName :['',Validators.compose([Validators.required,this.noSpaceAllow.bind(this)])],
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

noSpaceAllow(control : FormControl) {
console.log(control)
if(control.value != null && control.value.indexOf(' ') != -1){
return {nospaceAllowed : true}
} else {
  return false
}
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
   this.registrationFrom.patchValue({
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


