import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppModule} from "./app.module";
import { LoginComponent } from './auth/pages/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
