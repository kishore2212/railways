import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
bookingHistory=[
 
];
  constructor() { }

  ngOnInit() {
    this.bookingHistory=JSON.parse(localStorage.getItem("bookingHistory1"));
  }

}
