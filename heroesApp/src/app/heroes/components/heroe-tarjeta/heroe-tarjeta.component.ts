import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent{

  @Input() heroe!: Heroe; // El signo de exclamación indica que esta propiedad será inicializada por Angular
  /* @Input() heroe: Heroe | undefined; // Es otra forma de hacerlo */

}
