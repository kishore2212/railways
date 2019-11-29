import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  passenger;
  length;
  type;
  amount: number;
  totalAmount: number;
  amountPaid: number;
  bookingHistory1 = [];
  trainDetail = JSON.parse(localStorage.getItem("trainDetail"));

  date;
  validate() {
    console.log(this.amountPaid)
    if (this.amountPaid < this.totalAmount) {
      alert("Amount paid is not sufficient");
    }
    else {
      alert("Payment successful");
      console.log(this.type);
      this.bookingHistory1 = JSON.parse(localStorage.getItem("bookingHistory1"));
      console.log(this.bookingHistory1);
      if (this.bookingHistory1 == null) {
       
        this.bookingHistory1 = [{
          trainDetail: this.trainDetail,
          dateOfJourney: this.date,
          passenger: this.passenger,
          amount: this.totalAmount,
          type: this.type
        }];
        localStorage.setItem("bookingHistory1", JSON.stringify(this.bookingHistory1));
      }
      else {
        this.bookingHistory1.push({
          trainDetail: this.trainDetail,
          dateOfJourney: this.date,
          passenger: this.passenger,
          amount: this.totalAmount,
          type: this.type
        });
        localStorage.setItem("bookingHistory1", JSON.stringify(this.bookingHistory1));
      }
      this.router.navigate(['/history']);
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.passenger = JSON.parse(localStorage.getItem("passenger"));
    this.length = this.passenger.length;
    this.date = localStorage.getItem("date");
    this.type = localStorage.getItem("type");
    console.log(length);
    this.type = localStorage.getItem("type");
    if (this.type == "SL") {
      this.amount = 120;
    }
    if (this.type == "3A") {
      this.amount = 220;
    }
    if (this.type == "2A") {
      this.amount = 280;
    }
    this.totalAmount = this.length * this.amount;
  }

}
