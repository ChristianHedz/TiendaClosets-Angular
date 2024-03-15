import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/authResponse';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { LoginResponse , UserResponse, User, RegisteredUser} from '../interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private readonly url:string = environment.urlApi;
  private router = inject(Router);

  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  public authStatus  = computed(() => this._authStatus());

  private _currentAuthUser = signal<AuthResponse|null>(null);
  public currentAuthUser   = computed(() => this._currentAuthUser());

  private _currentUserToken = signal<String|null>(null);
  public currentUserToken  = computed(() => this._currentUserToken());

  private _currentRegisteredUser = signal<RegisteredUser|null>(null);
  public currentRegisteredUser = computed(() => this._currentRegisteredUser());

  authStatuss(){
    console.log('authStatus' + this._authStatus());

  }

  constructor() {
    console.log('constructor1' + this._authStatus());
    this.isLogged().subscribe();
    console.log('constructor2' + this._authStatus());

  }


  isLogged(): Observable<boolean> {
    this.authStatuss();

    const jwt = sessionStorage.getItem("jwt");
    console.log('jwt = ' + jwt);

    if(!jwt){
      this._authStatus.set(AuthStatus.notAuthenticated);
      return of(false);
    }else{
      this._authStatus.set(AuthStatus.authenticated);
    }

    console.log('islogged 1 = ' + this._authStatus());

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + jwt);

    return this.http.post<AuthResponse>(environment.urlApi + "/profile", {}, {headers}).pipe(
      tap((user: AuthResponse) => {
        console.log({user});
        this._currentAuthUser.set(user);
        this._authStatus.set(AuthStatus.authenticated);
        console.log('islogged 2 = ' + this.authStatus());
      }),
      map( () => true),
      catchError((error) => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        sessionStorage.removeItem('jwt');
        return this.handleError(error);
      })
    );
  }


  login(credentials: LoginResponse):Observable<boolean>{
    return this.http.post<User>(this.url+ '/login',credentials).pipe(
      tap((user: User) => {
        console.log({user});
        sessionStorage.setItem("jwt",user.jwt);
        this._currentUserToken.set(user.jwt);
        this._authStatus.set(AuthStatus.authenticated);
        console.log('login' + this._authStatus());
      }),
      map(() => true),
      catchError((error)=> {
        this._authStatus.set(AuthStatus.notAuthenticated);
        return this.handleError(error);
      })
    )
  }


    registerUsers(credentials: UserResponse):Observable<boolean>{
    return this.http.post<RegisteredUser>(environment.urlApi + '/user',credentials).pipe(
      tap((user: RegisteredUser) => {
        sessionStorage.setItem("jwt",user.token);
        this._currentRegisteredUser.set(user);
        this._authStatus.set(AuthStatus.authenticated);
      }),
      map(() => true),
      catchError((error)=>{
        this._authStatus.set(AuthStatus.notAuthenticated);
        return this.handleError(error)
      })
    )
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error('Ha ocurrido un error', error.error);
    }else{
      console.error(`Backend regreso codigo ${error.status}, el cuerpo fue: ${error.error}`);
    }
    return throwError(() => new Error('Por favor intenta de nuevo'));
  }

  public async logout() {
    const result = await Swal.fire({
      title: '¿Desea cerrar sesión?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    });

    if (result.isConfirmed) {
      this._authStatus.set(AuthStatus.notAuthenticated);
      this._currentAuthUser.set(null);
      console.log('logout' + this._authStatus());
      sessionStorage.removeItem('jwt');
      this.router.navigateByUrl('/login');
    }
  }
}
