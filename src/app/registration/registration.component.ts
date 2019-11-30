import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 name;
 userName;
 mobileNo;
 password;
 email;
 profile=[];
 profileDetails=[];
 register(){

this.profileDetails = JSON.parse(localStorage.getItem("profile"));

if (this.profileDetails == null) {
 
  this.profileDetails= [{name:this.name,userName:this.userName,mobileNo:this.mobileNo,password:this.password,email:this.email}];
  localStorage.setItem("profile", JSON.stringify(this.profileDetails));
}
else {
  this.profileDetails.push({name:this.name,userName:this.userName,mobileNo:this.mobileNo,password:this.password,email:this.email});

  localStorage.setItem("profile", JSON.stringify(this.profileDetails));
}




this.router.navigate(['/login']);
 }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
