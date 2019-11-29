import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name;
  username;
  dob;
  password;
  address;
  email;
  phone;

  register(event) {
    console.log(this.phone);
  }

}
