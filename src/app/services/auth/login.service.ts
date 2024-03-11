import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { User } from './user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>('');

  constructor(private http:HttpClient) {
     this.currentUserLoginOn= new BehaviorSubject<boolean>(sessionStorage.getItem("jwt")!==null);
     this.currentUserData= new BehaviorSubject<String>(sessionStorage.getItem("jwt") || "");
   }

  login(credentials: LoginRequest):Observable<any>{
    return this.http.post<User>(environment.urlApi+"/login",credentials).pipe(
      tap((user: User) => {
        sessionStorage.setItem("jwt",user.token);
        this.currentUserData.next(user.token);
        this.currentUserLoginOn.next(true);
      }),
      map((user: User) => user),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error('An error occurred:', error.error);
    }else{
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Algo fallo'));
  }
}
