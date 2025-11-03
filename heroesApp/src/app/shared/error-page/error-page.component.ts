import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [`
    /* Contenedor general centrado en pantalla */
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #0e0e0e;
    }

    /* Card del menú */
    .menu-container {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 280px;
      background: #262626;
      border-radius: 14px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.5);
      overflow: hidden;
      text-align: center;
    }

    /* Líneas divisoras entre elementos */
    .menu-container li {
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .menu-container li:last-child {
      border-bottom: none;
    }

    /* Enlaces */
    .menu-container a {
      display: block;
      padding: 16px 0;
      text-decoration: none;
      color: #e5e5e5;
      font-size: 1.1rem;
      font-weight: 500;
    }

    /* Hover */
    .menu-container a:hover {
      background-color: #333333;
      color: #ffffff;
    }

    /* Enlace activo */
    .active-link {
      background-color: #1976d2;
      color: #ffffff !important;
      font-weight: 600;
    }

    @media (max-width: 600px) {
      .menu-container {
        width: 90%;
      }

      .menu-container a {
        font-size: 1rem;
      }
    }
  `]

})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
