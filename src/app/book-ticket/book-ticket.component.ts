import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  dateOfJourney;
  routeInfo={source:"",destination:"",date:""};
  sources=["Salem","Coimbatore","Chennai","Banglore"];
  destinations=["Salem","Coimbatore","Chennai","Banglore"];
  formAction(){
    this.router.navigate(['/trainDetails'], { state:{route: this.routeInfo} });
    localStorage.setItem("source",this.routeInfo.source);
    localStorage.setItem("date",this.dateOfJourney);
  }
  

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
