import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
selectedTrain;
trainDetails;
seats:number=0;
seatsArray=[1];
types=["SL","3A","2A"];
type;
name;age;gender;
passenger=[
  
];
person={
  name:"",
  age:"",
  gender:""
};

  no;
  source;
  destination;
  start;
  end;
trainDetail=[];
dateOfJourney=localStorage.getItem("date");

addArr(name1,age1,gender1){
  // this.seatsArray.push(1);
  this.passenger.push({name:name1,age:age1,gender:gender1});
  console.log(this.seatsArray);
}
formAction(){
  localStorage.setItem("type",this.type);
  localStorage.setItem("passenger",JSON.stringify(this.passenger));
  
  // this.trainDetail.push({no:this.no,source:this.source,destination:this.destination,start:this.end});
  // localStorage.setItem("trainDetail",JSON.stringify(this.trainDetail));
 
  this.router.navigate(['/payment']);


}
st;
myFunction(item){

  if(item.no==  localStorage.getItem("selectedTrain")){
    
    localStorage.setItem("trainDetail",JSON.stringify(item));
  }
}
  constructor(private router : Router) { }
details;
  ngOnInit() {
    this.selectedTrain=localStorage.getItem("selectedTrain");
    this.trainDetails=JSON.parse(localStorage.getItem("trainDetails"));
    // console.log(localStorage.getItem("date"));
    this.trainDetails.forEach(this.myFunction);
  }

}
