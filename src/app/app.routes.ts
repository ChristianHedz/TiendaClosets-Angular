import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { isAuthGuard } from './auth/guard/isAuth.guard';
import { isNotAuthGuard } from './auth/guard/isNotAuth.guard';
import { BarChartComponent } from './dashboard/components/bar-chart/bar-chart.component';
import { LineChartComponent } from './dashboard/components/line-chart/line-chart.component';
import { HomePageComponent } from './homepage/pages/homepage/homepage.component';
import { ProductsComponent } from './homepage/pages/products/products.component';
import { Card3DComponent} from './components/carrousels/carrousel-bootstrap/card-3d.component';
import { InfoComponent } from './homepage/pages/info/info.component';
import { ContactComponent } from './homepage/pages/contact/contact.component';

export const routes: Routes = [
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard',component: Card3DComponent},
  {path: 'login',component: LoginComponent, canActivate: [isNotAuthGuard]},
  {path: 'bar',component: BarChartComponent},
  {path: 'line',component: LineChartComponent},
  {path: 'home',component: HomePageComponent},
  {path: 'closets',component: ProductsComponent},
  {path: 'info',component: InfoComponent},
  {path: 'contactame',component: ContactComponent}
];
