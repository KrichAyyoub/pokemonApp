import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BorderCardDirective } from './shared/directives/border-card.directive';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {PokemonsModule} from './pokemons/pokemons.module';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
