import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { isAuthGuard } from './auth/guard/isAuth.guard';
import { isNotAuthGuard } from './auth/guard/isNotAuth.guard';

export const routes: Routes = [
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard',component: DashboardComponent, canActivate: [isAuthGuard]},
  {path: 'login',component: LoginComponent, canActivate: [isNotAuthGuard]}
];
