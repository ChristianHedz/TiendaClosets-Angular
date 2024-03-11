import {NgModule} from "@angular/core";
import {CounterComponent} from "./counter.component";
import {LoginComponent } from "./auth/login/login.component";
import {ReactiveFormsModule } from "@angular/forms";
import {CommonModule } from "@angular/common";
import {SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [CounterComponent,LoginComponent], // declaramos los componentes que vamos a usar
  exports: [CounterComponent,LoginComponent], // exportamos los componentes que vamos a usar
  imports: [ReactiveFormsModule,CommonModule,SweetAlert2Module.forRoot(
    {provideSwal: () => import('sweetalert2/dist/sweetalert2.js')}
  )] // importamos los modulos que vamos a usar
})
export class AppModule {}

