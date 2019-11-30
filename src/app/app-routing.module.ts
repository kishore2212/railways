import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { PnrComponent } from './pnr/pnr.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
  { path: 'trainDetails', component: TrainDetailsComponent},
  { path: 'bookTicket', component: BookTicketComponent},
  { path: 'passenger', component: PassengerComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'pnr', component: PnrComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {path:'cancel',component:CancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [ProfileComponent, PnrComponent, RegistrationComponent, LoginComponent];
