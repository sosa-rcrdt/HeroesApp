import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  /* Fondo general oscuro con degradado */
  .login-grid {
    background-color: #0e0e0e;
  }

  /* Card central */
  .login-card {
    background: #262626;
    padding: 40px 30px;
    border-radius: 14px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    text-align: center;
    color: #e5e5e5;
    min-width: 280px;
  }

  .login-card h2 {
    margin-bottom: 25px;
    font-weight: 600;
    color: #ffffff;
  }

  /* Contenedor de botones */
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  /* Botones */
  button {
    width: 100%;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .login-card {
      width: 90%;
      padding: 25px;
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
