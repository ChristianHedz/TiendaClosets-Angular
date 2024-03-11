import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisteredUser} from './registeredUser';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { UserRequest } from './userRequest';

@Injectable({providedIn: 'root'})
export class RegisterUserService {

  registeredUserOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  registeredUserData: BehaviorSubject<RegisteredUser> = new BehaviorSubject<RegisteredUser>({
    id: 0,username: '',email: '',roles: [],token: ''
  });

  constructor(private http:HttpClient) {
    this.registeredUserOn= new BehaviorSubject<boolean>(sessionStorage.getItem("jwt")!==null);
    this.registeredUserData = new BehaviorSubject<RegisteredUser>({
      id: 0,username: '',email: '',roles: [],token: ''
    });
  }

  registerUsers(credentials: UserRequest):Observable<RegisteredUser>{
    return this.http.post<RegisteredUser>(environment.urlApi + '/user',credentials).pipe(
      tap((user: RegisteredUser) => {
        sessionStorage.setItem("jwt",user.token);
        this.registeredUserData.next(user);
        this.registeredUserOn.next(true);
      }),
      map((user: RegisteredUser) => user),
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
