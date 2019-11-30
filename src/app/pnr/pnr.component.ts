import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {
  bookingHistory=[
 
  ];
  show(){
    console.log("hi");
    document.getElementById("hidden").style.visibility='visible';
  }
  constructor() { }
  pnr;
  ngOnInit() {
    this.bookingHistory=JSON.parse(localStorage.getItem("bookingHistory1"));
    
  }

}
