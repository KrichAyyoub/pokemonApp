import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonTypeColorPipe} from '../shared/pipes/pokemon-type-color.pipe';
import {ListPokemonsComponent} from './list-pokemons/list-pokemons.component';
import {DetailsPokemonComponent} from './details-pokemon/details-pokemon.component';



@NgModule({
  declarations: [
    PokemonTypeColorPipe,
    ListPokemonsComponent,
    DetailsPokemonComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonsModule { }
