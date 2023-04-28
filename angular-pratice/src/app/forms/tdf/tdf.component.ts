import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {
@ViewChild('userForm') userForm : NgForm;
  countryList = [
{id : 'IN', value : 'India'},
{id : 'US', value : 'US'},
{id : 'UK', value : 'UK'},
{id : 'JAPAN', value : 'Japan'},
  ];

  defaultGender="Male";
  genderList =[
    {id : '1',value : 'Male'},
    {id : '2',value : 'Female'},
    {id : '3',value : 'Other'},
  ]
  onSubmit(userForm : NgForm) {
    console.log(userForm.value);
    console.log(userForm);
  }

  reset(userForm:NgForm) {
userForm.resetForm();
  }

  setDataToForm() {
    this.userForm.setValue({
      "firstName": "Sunil",
      "lastName": "Fawade",
      "email": "Sunil@gmail.com",
      "address": {
          "country": "IN",
          "city": "Latur",
          "street": "Ausa",
          "pincode": "413520"
      },
      "terms": true,
      "gender": "Male"
  })
  }
}
