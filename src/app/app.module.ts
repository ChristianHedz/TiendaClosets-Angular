import {NgModule} from "@angular/core";
import {ReactiveFormsModule } from "@angular/forms";
import {CommonModule, NgOptimizedImage } from "@angular/common";
import {SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./auth/pages/login.component";
import { AuthService } from "./auth/services/auth.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BarChartComponent } from "./dashboard/components/bar-chart/bar-chart.component";
import { LineChartComponent } from "./dashboard/components/line-chart/line-chart.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./homepage/pages/homepage/homepage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { Card3DComponent } from "./components/carrousels/carrousel-bootstrap/card-3d.component";
import { CardProductoComponent } from "./components/card-producto/card-producto.component";
import { ProductsComponent } from "./homepage/pages/products/products.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Carrousel3DComponent } from "./components/carrousels/carrousel-3d/carrousel-3d.component";
import { InfoComponent } from './homepage/pages/info/info.component';
import { ContactComponent } from "./homepage/pages/contact/contact.component";


@NgModule({
  declarations: [LoginComponent,DashboardComponent,BarChartComponent,LineChartComponent,HomePageComponent,
    NavbarComponent,Card3DComponent,CardProductoComponent,ProductsComponent,FooterComponent,
    Carrousel3DComponent,InfoComponent,ContactComponent],

  exports: [LoginComponent,DashboardComponent,BarChartComponent,LineChartComponent,HomePageComponent,
     NavbarComponent,Card3DComponent,CardProductoComponent,ProductsComponent,FooterComponent,
     Carrousel3DComponent,InfoComponent,ContactComponent],

  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,RouterOutlet,RouterModule,NgOptimizedImage],
  providers: [AuthService]
})
export class AppModule {}

