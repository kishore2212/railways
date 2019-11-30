import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
bookingHistory=[
 
];
cancelHistory=[];

buttonAction(selectedTrain,index){
  console.log(selectedTrain);
  console.log(this.bookingHistory[index]);
  console.log("booking1"+this.bookingHistory);
  this.bookingHistory.splice(index,1);
  console.log("booking"+this.bookingHistory);
  localStorage.setItem("bookingHistory1",JSON.stringify(this.bookingHistory));
   localStorage.setItem("cancel", JSON.stringify(selectedTrain));






  this.router.navigate(['/cancel']);
}
  constructor(private router: Router) { }

  ngOnInit() {
    this.bookingHistory=JSON.parse(localStorage.getItem("bookingHistory1"));
  }

}
