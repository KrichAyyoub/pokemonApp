import { Component, OnInit } from '@angular/core';
/**
 * ActivatedRoute: Librairie qui vont nous servir à extraire l'identifiant du pokemon à afficher
 * qui est contenu dans l'url du composant
 * Router: Rediriger l'utilisateur.
 */
import {ActivatedRoute, Router } from '@angular/router';
import {Pokemon} from '../../pokemon';
import {POKEMONS} from '../../shared/pokemonList';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss']
})
export class DetailsPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[];
  pokemonToDisplay: Pokemon = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.listOfPokemons = POKEMONS;
    console.log(this.listOfPokemons);
    // Récupérer le paramètre de la route associée à notre composant
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    for (let i = 0; i < this.listOfPokemons.length; i++) {
      // Rechercher dans la liste des pokemons, l'identifiant du pokemon qui
      // correspond à l'identifiant récupéré depuis l'url
      if (this.listOfPokemons[i].id === id) {
        this.pokemonToDisplay = this.listOfPokemons[i];
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemon']);
  }

}
