import { Component } from '@angular/core';
import { IPokemones } from "./../interfaces/IPokemones";
import { DATOS_POKEMONES } from '../interfaces/datos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public pokemon: string='';
  public pokemones: IPokemones[] =   DATOS_POKEMONES;

  

  constructor( private router: Router ) {}

  onPokemonClick(pokemon: IPokemones) {
    console.log('Pokémon clickeado:', pokemon);
      this.router.navigate(['./detalle-pokemon', pokemon.id])
  }

}



