import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private authService = inject(AuthService);

  onLogout(){
    this.authService.logout();
  }

}
