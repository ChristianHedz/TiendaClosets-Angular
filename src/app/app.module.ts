import {NgModule} from "@angular/core";
import {ReactiveFormsModule } from "@angular/forms";
import {CommonModule } from "@angular/common";
import {SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./auth/pages/login.component";
import { AuthService } from "./auth/services/auth.service";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { BarChartComponent } from "./dashboard/components/bar-chart/bar-chart.component";
import { LineChartComponent } from "./dashboard/components/line-chart/line-chart.component";
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./homepage/pages/homepage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CarrouselComponent } from "./components/carrousel/carrousel.component";
import { CardProductoComponent } from "./components/card-producto/card-producto.component";


@NgModule({
  declarations: [LoginComponent,DashboardComponent,BarChartComponent,LineChartComponent,
    HomePageComponent,NavbarComponent,CarrouselComponent,CardProductoComponent],

  exports: [LoginComponent,DashboardComponent,BarChartComponent,
    LineChartComponent,HomePageComponent, NavbarComponent,CarrouselComponent,CardProductoComponent],

  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,RouterOutlet],
  providers: [AuthService]
})
export class AppModule {}

