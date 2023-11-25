import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
];
