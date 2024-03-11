import {NgModule} from "@angular/core";
import {CounterComponent} from "./counter.component";
import {LoginComponent } from "./auth/login/login.component";
import {ReactiveFormsModule } from "@angular/forms";
import {CommonModule } from "@angular/common";
import {SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "./services/auth/login.service";
import { RegisterUserService } from "./services/user/user.service";

@NgModule({
  declarations: [CounterComponent,LoginComponent],
  exports: [CounterComponent,LoginComponent],
  imports: [ReactiveFormsModule,CommonModule,SweetAlert2Module.forRoot(),HttpClientModule],
  providers: [LoginService,RegisterUserService]
})
export class AppModule {}

