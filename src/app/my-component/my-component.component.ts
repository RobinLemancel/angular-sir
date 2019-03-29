import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeapiService } from '../pokeapi.service';
import { GetPokemonSearchedService } from '../get-pokemon-searched.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

	id:string = '';
	pokemons : Pokemon[] =[];
	selectedPokemon :string =  '';
	filtre:string = '';
	constructor(private pokeapiService : PokeapiService, private pokeSearchedService : GetPokemonSearchedService ) { 
	}

  ngOnInit() {
	  this.pokeSearchedService.currentId.subscribe(id => this.id = id)
	  this.showPokemons();
  }
  
  changeId(){
	this.pokeSearchedService.getPokeSearched(this.selectedPokemon);
  }
  
  // clickGo() {
	  // var id = this.selectedPokemon;
	  // var nom = "";
	  // console.log("id : " + id);
	  // this.pokemons.forEach(function(pokemon){
		// if(pokemon.id === id){
			// nom = pokemon.nom;
		// }
	  // });
  // }
  
  showPokemons(){
	  this.pokeapiService.getPokemons()
		.subscribe((data) =>{
			var pokeList : Pokemon[] = [];
			data['pokemon_entries'].forEach(function(pokemon){
				var p : Pokemon = new Pokemon();
				p.id = pokemon['entry_number'];
				p.nom = pokemon['pokemon_species']['name'];
				this.addPokemon(p);
			}.bind(this));
			}, (error) => {
				console.log(error);
			}
		);
	}
	
	addPokemon(p:Pokemon){
		this.pokemons.push(p);
	}
}
