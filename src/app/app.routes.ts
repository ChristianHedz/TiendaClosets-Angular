import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'login',component: LoginComponent}
];
