import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  { path: 'trainDetails', component: TrainDetailsComponent},
  { path: 'bookTicket', component: BookTicketComponent},
  { path: 'passenger', component: PassengerComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'history', component: HistoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
