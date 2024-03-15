import {NgModule} from "@angular/core";
import {ReactiveFormsModule } from "@angular/forms";
import {CommonModule } from "@angular/common";
import {SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./auth/pages/login.component";
import { AuthService } from "./auth/services/auth.service";
import { RouterOutlet } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";


@NgModule({
  declarations: [LoginComponent,DashboardComponent],
  exports: [LoginComponent,DashboardComponent],
  imports: [ReactiveFormsModule,CommonModule,SweetAlert2Module.forRoot(),HttpClientModule,RouterOutlet],
  providers: [AuthService]
})
export class AppModule {}

