import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../app/pokemon'
import {POKEMONS} from '../app/shared/pokemonList'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'APPLICATION DE POKEMON';
  pokemons : Pokemon[];

  ngOnInit() : void {

    this.pokemons = POKEMONS

  }


  selectPokemon(pokemon) : void{

    alert("le pokemon choisi est : "+pokemon.name)
  }
}
