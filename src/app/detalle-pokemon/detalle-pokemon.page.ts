

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemones } from './../interfaces/IPokemones';
import { DATOS_POKEMONES } from './../interfaces/datos'; // Asegúrate de importar los datos correctamente

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.page.html',
  styleUrls: ['./detalle-pokemon.page.scss'],
})
export class DetallePokemonPage implements OnInit {
  pokemon: IPokemones | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Añadir una verificación para asegurarte de que el ID es válido
    if (isNaN(id)) {
      console.error('ID del Pokémon no válido:', id);
      return;
    }
    // Encuentra el Pokémon en los datos
    this.pokemon = DATOS_POKEMONES.find((p: IPokemones) => p.id === id);
    if (!this.pokemon) {
      console.error('Pokémon no encontrado con ID:', id);
    }
  }
}
