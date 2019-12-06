import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {POKEMONS} from '../../shared/pokemonList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(selectedPokemon: Pokemon): void {
    // alert('Le pokémon sélectionné est :' + selectedPokemon.name);
    // Passer en paramètre l'url de redirection + les paramètres éventuels de la route.
    const link = ['/pokemon', selectedPokemon.id];
    // const link = [`/pokemon/${selectedPokemon.id}`];

    this.router.navigate(link);
  }

}
