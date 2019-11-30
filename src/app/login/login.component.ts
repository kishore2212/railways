import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;
  profile;
  t=0;
  formSubmit(){
this.profile=JSON.parse(localStorage.getItem("profile"));

for(let detail of this.profile){
  if(detail.userName==this.userName && detail.password==this.password){
    alert("Login successful");
    // this.router.navigate(['/profile']);
    this.router.navigate(['/profile'], { state:{profile: detail} });
    this.t=1;
  }
  
}
if(this.t==0){
alert("Invalid Password");
}
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
