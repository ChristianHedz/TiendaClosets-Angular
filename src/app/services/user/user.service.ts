import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login.service';
import { catchError, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private http:HttpClient) { }

getUsers(){
  return this.http.get<User>(environment.urlApi + '/users').pipe(
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
