import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'dashboard',component: AppComponent},
  {path: 'login',component: LoginComponent}
];
