import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPokemonsComponent} from './pokemons/list-pokemons/list-pokemons.component';
import {DetailsPokemonComponent} from './pokemons/details-pokemon/details-pokemon.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'pokemon', component: ListPokemonsComponent },
  {path: 'pokemon/:id', component: DetailsPokemonComponent},
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
