import { RegisteredUser } from './../../services/user/registeredUser';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';
import { UserRequest } from '../../services/user/userRequest';
import { RegisterUserService } from '../../services/user/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  public isLoginActive = false;

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginService, private registerUserService:RegisterUserService){}

  loginForm = this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    password: [``,[Validators.required,Validators.minLength(3)]]
  });

  registerForm = this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    repeatedPassword: ['',[Validators.required,Validators.minLength(3)]],
    password: [``,[Validators.required,Validators.minLength(3)]]
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

  public async login(){
    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({ // Se llama al metodo login del servicio loginService y se le pasa como parametro el valor del formulario loginForm como un objeto de tipo LoginRequest y se suscribe a el para obtener la respuesta del servidor

        next: (data) => console.log(data), // next sirve para obtener la respuesta del servidor en caso de que sea correcta

        error: (error) => this.swalMessage('Error!', 'Los datos ingresados son incorrectos', 'error'), // error sirve para obtener la respuesta del servidor en caso de que sea incorrecta

        complete: () => { // complete sirve para obtener la respuesta del servidor en caso de que sea correcta
          this.swalMessage('Bienvenido!', 'Has iniciado sesión correctamente', 'success');
          this.router.navigateByUrl('/dashboard'); //
        }

      })
    } else {
      this.swalMessage('Error!', 'Los datos ingresados son incorrectos', 'error');
    }
  }

  public  registerUsers(){
    if (this.registerForm.valid) {

      this.registerUserService.registerUsers(this.registerForm.value as UserRequest).subscribe({ // Se llama al metodo login del servicio loginService y se le pasa como parametro el valor del formulario loginForm como un objeto de tipo LoginRequest y se suscribe a el para obtener la respuesta del servidor

        next: (data) => console.log(data), // next sirve para obtener la respuesta del servidor en caso de que sea correcta

        error: (error) => this.swalMessage('Error!', 'Los datos ingresados no son validos', 'error'),
         // error sirve para obtener la respuesta del servidor en caso de que sea incorrecta

        complete: () => { // complete sirve para obtener la respuesta del servidor en caso de que sea correcta
          this.swalMessage('Bienvenido!', 'Has iniciado sesión correctamente', 'success');
          this.router.navigateByUrl('/dashboard'); //
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
