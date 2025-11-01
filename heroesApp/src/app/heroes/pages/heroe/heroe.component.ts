import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    .hero-container {
      padding: 20px;
      color: #fff;
    }

    .hero-image-container {
      text-align: center;
    }

    .hero-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .hero-title small {
      font-size: 1.2rem;
      color: #ccc;
    }

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease;
    }

    .hero-details {
      background-color: #2c2c2c;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .publisher {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .hero-info-card {
      background-color: #383838;
      border-radius: 8px;
      padding: 10px;
      margin-top: 15px;
    }

    mat-list-item {
      color: #e0e0e0;
      font-size: 1rem;
    }

    mat-icon {
      margin-right: 10px;
    }

    .button-container {
      margin-top: 25px;
      text-align: right;
    }

    button {
      font-weight: 600;
      text-transform: uppercase;
    }

    @media (max-width: 768px) {
      .hero-container {
        padding: 10px;
      }
      .button-container {
        text-align: center;
      }
    }
  `]

})
export class HeroeComponent implements OnInit {

  @Input() heroeBuscado!: Heroe;

  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router ) { }

  ngOnInit(): void {

    if(this.heroeBuscado){
      this.heroe = this.heroeBuscado;
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id))
    )
    .subscribe( heroe => this.heroe = heroe);
  }

  regresar() {
    this.router.navigate(['/heroes/listado'])
  }

}
