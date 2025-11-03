import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    /* Contenedor general: centra vertical y horizontalmente */
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #0b0b0b;
      padding: 20px;
    }

    /* Card */
    .login-card {
      background: #262626;
      padding: 40px 30px;
      border-radius: 14px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
      text-align: center;
      color: #e5e5e5;
      width: 100%;
      max-width: 320px;
    }

    .login-card h2 {
      margin-bottom: 25px;
      font-weight: 600;
      color: #ffffff;
    }

    /* Botones */
    .buttons-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    button {
      width: 100%;
      font-weight: 500;
    }

    /* Responsivo */
    @media (max-width: 480px) {
      .login-card {
        padding: 25px 20px;
        max-width: 90%;
      }

      .login-card h2 {
        font-size: 1.2rem;
        margin-bottom: 20px;
      }

      .buttons-container {
        gap: 10px;
      }
    }
  `]


})
export class LoginComponent {

  constructor( private router: Router,
              private authService: AuthService ) { }

  login(){

    this.authService.login()
      .subscribe( resp => {

        if(resp.id){
          this.router.navigate(['./heroes'])
        }

      })

  }

  ingresarSinLogin() {
    this.authService.logout();
    this.router.navigate(['./heroes'])
  }

}
