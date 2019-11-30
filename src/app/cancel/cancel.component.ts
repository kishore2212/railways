import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
cancelDetails;
  constructor() { }

  ngOnInit() {
    this.cancelDetails=JSON.parse(localStorage.getItem("cancel"));
  }

}
