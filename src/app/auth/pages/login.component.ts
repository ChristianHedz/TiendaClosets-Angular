import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginResponse } from '../interfaces/loginResponse';
import { UserResponse } from '../interfaces/userResponse';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  public isLoginActive = false;

  constructor(private formBuilder:FormBuilder, private router:Router, private authService:AuthService){}

  loginForm = this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    password: [``,[Validators.required,Validators.minLength(5)]]
  });

  registerForm = this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    repeatedPassword: ['',[Validators.required,Validators.minLength(5)]],
    password: [``,[Validators.required,Validators.minLength(5)]]
  });

  onLoginActive(){
    this.isLoginActive = !this.isLoginActive;
  }

  //login

  get usernameLogin(){
    return this.loginForm.controls.username;
  }

  get emailLogin(){
    return this.loginForm.controls.email;
  }

  get passwordLogin(){
    return this.loginForm.controls.password;
  }

  //register

  get username(){
    return this.registerForm.controls.username;
  }

  get email(){
    return this.registerForm.controls.email;
  }

  get password(){
    return this.registerForm.controls.password;
  }

  get repeatedPassword(){
    return this.registerForm.controls.repeatedPassword;
  }

  public login(){
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value as LoginResponse).subscribe({

        next: (data) => console.log(data),
        error: (error) => this.swalMessage('Error!', 'Los datos ingresados son incorrectos', 'error'),

        complete: () => {
          this.swalMessage('Bienvenido!', 'Has iniciado sesión correctamente', 'success');
          this.router.navigateByUrl('/dashboard');
          console.log(this.authService.authStatus());
        }

      })
    } else {
      this.swalMessage('Error!', 'Los datos ingresados son incorrectos', 'error');
    }
  }

  public registerUsers(){
    if (this.registerForm.valid) {

      this.authService.registerUsers(this.registerForm.value as UserResponse).subscribe({ // Se llama al metodo login del servicio loginService y se le pasa como parametro el valor del formulario loginForm como un objeto de tipo LoginRequest y se suscribe a el para obtener la respuesta del servidor

        next: (data) => console.log(data),

        error: (error) => this.swalMessage('Error!', 'Las contraseñas deden de ser iguales', 'error'),

        complete: () => {
          this.swalMessage('Bienvenido!', 'Has iniciado sesión correctamente', 'success');
          this.router.navigateByUrl('/dashboard');
          console.log('registeredusers' +this.authService.authStatus());

        }

      })
    } else {
      this.swalMessage('Error!', 'Ingresa los datos correctamente', 'error');
    }
  }

  public swalMessage(title:string, text:string, icon:any){
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }

}
