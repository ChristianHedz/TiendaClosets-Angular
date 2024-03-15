import { Component, computed } from '@angular/core';
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

  usernameLogin  = computed(() => this.loginForm.controls.username);

  emailLogin = computed(()=> this.loginForm.controls.email)

  passwordLogin = computed(()=> this.loginForm.controls.password)

  //register

  username = computed(()=> this.registerForm.controls.username)

  email = computed(()=> this.registerForm.controls.email)

  password = computed(()=> this.registerForm.controls.password)

  repeatedPassword = computed(()=> this.registerForm.controls.repeatedPassword)

  public login(){
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value as LoginResponse).subscribe({

        next: (data) => console.log(data),
        error: (error) => Swal.fire('Error!', 'Los datos ingresados son incorrectos', 'error'),

        complete: () => {
          Swal.fire('Bienvenido!', 'Has iniciado sesión correctamente', 'success');
          this.router.navigateByUrl('/dashboard');
        }

      })
    } else {
      Swal.fire('Error!', 'Los datos ingresados son incorrectos', 'error');
    }
  }

  public registerUsers(){
    if (this.registerForm.valid) {

      this.authService.registerUsers(this.registerForm.value as UserResponse).subscribe({ // Se llama al metodo login del servicio loginService y se le pasa como parametro el valor del formulario loginForm como un objeto de tipo LoginRequest y se suscribe a el para obtener la respuesta del servidor

        next: (data) => console.log(data),

        error: (error) => console.log(error),

        complete: () => {
          Swal.fire('Bienvenido!', 'Has iniciado sesión correctamente', 'success');
          this.router.navigateByUrl('/dashboard');
        }

      })
    } else {
      Swal.fire('Error!', 'Ingresa los datos correctamente', 'error');
    }
  }

}
