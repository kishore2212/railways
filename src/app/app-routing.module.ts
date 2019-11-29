import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PnrComponent } from './pnr/pnr.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { Profile } from 'selenium-webdriver/firefox';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'pnr', component: PnrComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [ProfileComponent, PnrComponent, RegistrationComponent, LoginComponent];
