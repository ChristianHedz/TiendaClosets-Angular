import { inject } from "@angular/core";
import { AuthStatus } from "../interfaces/auth-status.enum";
import { AuthService } from "../services/auth.service";
import { CanActivateFn, Router } from "@angular/router";

export const isNotAuthGuard: CanActivateFn = (route,state) => {

  const authService = inject( AuthService );
  const router = inject( Router );

  if(authService.authStatus() === AuthStatus.authenticated){
    router.navigateByUrl('/dashboard');
    return false;
  }
  return true;
}
