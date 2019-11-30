import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css']
})
export class TrainDetailsComponent implements OnInit {
  routeInfo;
  
  trainDetails=[
    {source:"Salem", destination:"Chennai" , no:"12345", name:"Central Express" , start:"12:30", end:"17:15",sl:"120",threeA:"100",twoA:"60"},
    {source:"Salem", destination:"Coimbatore" , no:"12323", name:"Coimbatore Express" , start:"15:30", end:"17:15",sl:"120",threeA:"100",twoA:"60"},
    {source:"Salem", destination:"Banglore" , no:"32123", name:"Banglore Express" , start:"8:30", end:"11:40",sl:"120",threeA:"100",twoA:"60"},
    {source:"Salem", destination:"Chennai" , no:"98765", name:"SA-MAS Express" , start:"8:30", end:"11:40",sl:"120",threeA:"100",twoA:"60"},
    {source:"Salem", destination:"Coimbatore" , no:"76584", name:"SA-CBE Express" , start:"8:30", end:"11:40",sl:"120",threeA:"100",twoA:"60"}

  ];
  buttonAction(selectedTrain){
    console.log(selectedTrain);
    localStorage.setItem("selectedTrain",selectedTrain);
    localStorage.setItem('trainDetails', JSON.stringify(this.trainDetails));
    this.router.navigate(['/passenger']);
  }
  
  constructor(private router : Router) { }

  ngOnInit() {
    this.routeInfo=history.state.route;
    
  }

}
