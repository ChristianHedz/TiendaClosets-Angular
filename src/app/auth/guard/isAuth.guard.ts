import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, map } from "rxjs";
import { AuthService } from "../services/auth.service";

export const isAuthGuard: CanActivateFn = (route,state) => {
  console.log('isAuthGuard');

  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.isLogged().pipe(
    map( (isLogged) => {
      if (isLogged) return true;
      router.navigateByUrl('/login');
      return false;
    }),
    catchError( (error) => {
      console.log('isAuthGuard error');
      router.navigateByUrl('/login');
      return [false];
    })
  );
};
